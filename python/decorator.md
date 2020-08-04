# Decorators 

Decorators are very powerful and useful tool in Python since it allows programmers to modify the behavior of function or class. Decorators allow us to wrap another function in order to extend the behavior of wrapped function, without permanently modifying it.

## Creating Decorator

    def new_decorator(func):

    def wrap_func():
        print "Code would be here, before executing the func"

        func()

        print "Code here will execute after the func()"

    return wrap_func

    def func_needs_decorator():
         print "This function is in need of a Decorator"
       
       
### Reassign func_needs_decorator
    func_needs_decorator = new_decorator(func_needs_decorator)
    
### Decorator can also be written as
     @new_decorator
     def func_needs_decorator():
          print "This function is in need of a Decorator"
