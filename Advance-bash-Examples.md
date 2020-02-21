#### Checking Expected Parameters
```bash
#!/bin/bash

E_WRONG_ARGS=85
script_parameters="-a -h -m -z"
# -a = all, -h = help, etc.
if [ $# -ne '4' ]
then
 echo "Usage: `basename $0` $script_parameters"
 # `basename $0` is the script's filename.
 exit $E_WRONG_ARGS
fi
```

#### Test Operator
```bash
(( var0 = var1<98?9:21 ))
# ^ ^
# if [ "$var1" -lt 98 ]
# then
# var0=9
# else
# var0=21
# fi
```
