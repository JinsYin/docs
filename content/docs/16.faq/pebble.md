---
title: Pebble FAQ
---

## What is Pebble and why do we use it at Kestra?
Pebble is a Java templating engine inspired by [Twig](https://twig.symfony.com/) and similar to the [Python Jinja Template Engine](https://palletsprojects.com/p/jinja/) syntax.

In Kestra, it's used for variable operations and passing metadata between tasks.

## How to read outputs & inputs using Pebble?

### Read inputs

When using `inputs` property in a Flow, you can access the corresponding values just by using `inputs` variable in your tasks.

```yaml
id: input_string
namespace: demo.kestra

inputs:
  - name: name
    type: STRING

tasks:
  - id: say_hello
    type: io.kestra.core.tasks.log.Log
    message: "Hello 👋, my name is {{ inputs.name }}"
```

### Read task ouputs

Most of Kestra's tasks expose output values. You can access those outputs in other tasks by using `outputs.<task_name>.<output_name>`. Every task output can be found in the corresponding task documentation.

In the example below, we use the `value` outputs of the `io.kestra.core.tasks.debugs.Return` task in the downstream task.

```yaml
id: input_string
namespace: demo.kestra

inputs:
  - name: name
    type: STRING

tasks:
  - id: say_hello
    type: io.kestra.core.tasks.debugs.Return
    format: "Hello 👋, my name is {{ inputs.name }}"


  - id: can_you_repeat
    type: io.kestra.core.tasks.log.Log
    message: '{{ outputs.say_hello.value }}'
```

## How to format a date in Pebble?

Pebble can be very useful to make small transformation on the fly - without the need to use Python or some dedicated programming language. 
For instance, we can use the `date` function to format date values: `'{{ inputs.my_date | date("yyyyMMdd") }}'`

You can find more documentation on the `date` function [in the Variables section of the Developer Guide](../05.developer-guide/03.variables/03.filter/date.md)

### Coalesce operator for trigger or manual execution

Most of the time, a flow will be triggered automatically. Either on schedule or based on external events. It’s common to use the date of the execution to process the corresponding data and make the flow dependent on time. 

With Pebble you can use the `trigger.date` to get the date of the executed trigger.
Still, sometimes you want to manually execute a flow. Then the `trigger.date` variable won’t work anymore. For this you can use the `execution.startDate` variable that returns the execution start date.

To support both use cases, use the coalesce operator `??`. The example below shows how to apply it in a flow.

```yaml
id: pebble-date-trigger
namespace: demo.kestra.pebble
tasks:

  - id: return_date
    type: io.kestra.core.tasks.debugs.Return
    format: '{{ trigger.date ?? execution.startDate | date("yyyy-MM-dd")}}'

triggers:
  - id: schedule
    type: io.kestra.core.models.triggers.types.Schedule
    cron: "* * * * *"
```

## How to parse objects & list?

Sometimes, outputs return nested objects or lists. To parse those elements, you may leverage `jq`. You can use jQuery to slice, filter, map, and transform structured data with the same ease that `sed`, `awk`, `grep`, and similar Linux commands let you manipulate strings.

Consider the following flow:

```yaml
id: test-object
namespace: dev


inputs:
  - name: data
    type: JSON
    defaults: '{"value": [1, 2, 3]}'

tasks:
  - id: hello
    type: io.kestra.core.tasks.log.Log
    message: "{{ inputs.data }}"
```

The expression `{{ inputs.data.value }}` will return the list `[1, 2, 3]`

The expression `{{ inputs.data.value | jq(".[1]") | first }}` will return `2`.

`jq(".[1]")` accesses the second value of the list and returns an array with one element. We then use `first` to access the value itself.

> Note: we could have used `{{ inputs | jq(".data.value[1]") | first }}`, jq allows to parse any object in Kestra context.

You can troubleshoot complex Pebble expressions using the [Eval Expression](../04.user-interface-guide/04-executions.md) button in the outputs tab of a Flow execution. It's helpful to validate how complex objects will be parsed.


## How to use conditions in Pebble?

In some tasks, such as the `If` or `Switch` tasks, you will need to provide some conditions. You can use the Pebble syntax to use previous task outputs within those conditions:

```yaml
id: test-object
namespace: dev


inputs:
  - name: data
    type: JSON
    defaults: '{"value": [1, 2, 3]}'

tasks:

  - id: if
    type: io.kestra.core.tasks.flows.If
    condition: '{{ inputs.data.value | jq(".[2]") | first == 3}}'
    then:
      - id: when_true
        type: io.kestra.core.tasks.log.Log
        message: 'Condition was true'
    else:
      - id: when_false
        type: io.kestra.core.tasks.log.Log
        message: 'Condition was false'
```

