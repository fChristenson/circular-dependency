# Circular dependencies

## What we will cover

* What is a circular dependency?
* How do we fix them?

## Notes

When a project grows sooner or later the system becomes too complex to
keep in your head all at once and this is when you may encounter circular
dependencies.

It can happen at any moment and it will sometimes be tricky to understand why
it is happening.

Node will try to resolve this problem by providing a unfinished copy and then 
load in the code when the module has been resolved, however this is not 
a done deal and probably one of my least favourite features of Node.
