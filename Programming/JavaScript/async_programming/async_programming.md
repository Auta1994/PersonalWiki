## Asynchronous Programming [Back](./../JavaScript.md)

### 1. Introduction

In the computer science, I have always grasped that "Asynchronous" is a word for describing working states between threads. If the job of one thread does not affect another one, it indicates to be asynchronous. In this chapter, it's a skill for programming.

As JavaScript is almost run in a thread, and its executing blocks the UI thread at the same time, resulting in a really "disastrous" user experience, asynchronous programming allows developers to write code in a asynchronous way to improve performance of JavaScript code. With making great use of CPU resources to prevent from wasting calculation units, the effect is always impressive.

Before using such a skill to handle multitasking, be sure that tasks are non-preemptive (非優先級的), also means they're not related to each other. If one task relies on the result of another task, it's absolutely impossible to improve them by converting into in a asynchronous way. To explain it more apparently, I will take the following case as an example:

Assume that we have four variables `a`, `b`, `c`, and `d` respectively, and then considering a simple task, in which we want to add them together.

The first way is as shown in the following snippet (**a common way**):

```js
/**
 * 1. calculating the adding of `a` and `b`
 * 2. calculating the adding of `c` and the result of step 1
 * 3. calculating the adding of `d` and the result of step 2
 */
var result = d + (c + (a + b));
```

And the second way is (**a asynchronous way**):

```js
/**
 * 1. calculating the adding of `a` and `b`,
 *    and the adding of `c` and `d` at the same time
 * 2. calculating the adding of two results of step 1
 */
var result = (d + c) + (a + b);
```

With considering two ways of calculating above, it's apparently that the second way is faster. Why? That's because each adding of the first way has relied on the result of previous step, while tasking of adding `c` and `d` is completely isolated from adding `a` and `b`. Therefore, the second way has saved some time by executing them in parallel.


> Even if it is asynchronous, remember that it does not mean to use multiple threads.

### 2. Continuation-Passing Style (CPS)

Before discussing how to code in JavaScript with asynchronous programming skills, it is recommended to know a style in functional programming firstly, named **Continuation-Passing Style**, a.k.a **CPS**. In this style, control flows are passed explicitly, contrasted with direct style.
