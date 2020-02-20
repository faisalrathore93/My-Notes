The sha-bang ( #!) [6] at the head of a script tells your system that this file is a set of commands to be fed to
the command interpreter indicated

```bash
#!/bin/sh
#!/bin/bash
#!/usr/bin/perl
#!/usr/bin/tcl
#!/bin/sed -f
#!/bin/awk -f
```


Special Variables
```bash
 $#     ---     Number of Arguments passed
 
 ```
 
 Specila Characters
 
 ```bash
 #            ---      Comment
 ;            ---      Command Seperator
 .            ---      Current Directory
 "            ---      "STRING" preserves (from interpretation) most of the special characters within STRING.
 '            ---      'STRING' preserves all special characters within STRING. This is a stronger form of quoting than "STRING"
 \                 ---      Escape
 `                 ---      This is also the division arithmetic operator.
 :                 ---      No Operation (Null command)
 !                 ---      Inverse
 *                 ---      Wildcard
 ?                 ---      Test Operator `condition?result-if-true:result-if-false`
 $                 ---      Varible Name
 ${}               ---      varible Substituion
 $*                ---      All the Arguments passed to a script
 $@                ---      All the Arguments passed to a script
 $$                ---      Process ID of Script
 ()                ---      Command Group
 [[ ]]             ---      Test (Used for conditions etc)
 []                ---      Arryas `Array[1]=slot_1 echo ${Array[1]}`
 $[ ... ]          ---      Integer Expansion 
 (( ... ))         ---      Integer Expansion
 > &> >& >> < <>   ---      Redirections `command &>filename redirects both the stdout and the stderr of command to filename.`
 |                 ---      Pipe
 >|                ---      Force Pipe
 ||                ---      Logical OR
 &&                ---      Logical And
 &                 ---      Run Job in Background
 ~+                ---      Current Working Directory
 ~-                ---      Previous Working Directory
 =~                ---      Regular Expression match
 
 ```
 
 Subshells
 
 
 ```bash
 (a=hello; echo $a)
 ```
 
 A listing of commands within parentheses starts a subshell.
Variables inside parentheses, within the subshell, are not visible to the rest of the
script. The parent process, the script, cannot read variables created in the child
process, the subshell.
```bash
a=123
( a=321; )
echo "a = $a" # a = 123
# "a" within parentheses acts like a local variable.
```

#### Arrays
```sh
Array=(element1 element2 element3)
```


#### Brace expansion.

```shell
root@root:~/Desktop/bash# cat imran{.txt,.pdf}
cat: imran.txt: No such file or directory
cat: imran.pdf: No such file or directory


root@root:~/Desktop/bash# echo {imran,nazir}
imran nazir


root@root:~/Desktop/bash# echo {a..z}
a b c d e f g h i j k l m n o p q r s t u v w x y z
root@root:~/Desktop/bash# echo {A..Z}
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
root@root:~/Desktop/bash# echo {A..Z}{1..3}
A1 A2 A3 B1 B2 B3 C1 C2 C3 D1 D2 D3 E1 E2 E3 F1 F2 F3 G1 G2 G3 H1 H2 H3 I1 I2 I3 J1 J2 J3 K1 K2 K3 L1 L2 L3 M1 M2 M3 N1 N2 N3 O1 O2 O3 P1 P2 P3 Q1 Q2 Q3 R1 R2 R3 S1 S2 S3 T1 T2 T3 U1 U2 U3 V1 V2 V3 W1 W2 W3 X1 X2 X3 Y1 Y2 Y3 Z1 Z2 Z3
```
Block of code [curly brackets]. Also referred to as an inline group, this construct, in effect, creates
an anonymous function (a function without a name). However, unlike in a "standard" function, the
variables inside a code block remain visible to the remainder of the script.

```bash
a=123
{ a=321; }
echo "a = $a" # a = 321 (value inside code block)
```

#### Using -

__redirection from/to stdin or stdout [dash]__
```bash
bash$ cat -
abc
abc
...
Ctl-D
```
```bash
grep Linux file1 | diff file2 -
```



#### variables

- Enclosing a referenced value in double quotes (" ... ") does not interfere with variable substitution.
This is called partial quoting, sometimes referred to as "weak quoting." Using single quotes (' ... ')
causes the variable name to be used literally, and no substitution will take place. This is full quoting,
sometimes referred to as 'strong quoting.

- Note that $variable is actually a simplified form of ${variable}


__# Quoting a variable preserves whitespace.__

```shell
names="A B     C     D"
echo $names      #A B C D
echo "$names"    #A B     C     D
```
- An uninitialized variable has no value, however it evaluates as 0 in an arithmetic operation.

```
a=23
```
```
varA=$varB
```
```
a=`echo Hello!`
R=$(cat /etc/redhat-release)
```

__Eathermatic expressions__
```shell
root@root:~# a=2
root@root:~# let a+=1
root@root:~# echo $a
3
root@root:~# 
```

#### Shift Command Line Args

```bash
echo "Arg1 $1"
shift 1
echo "Arg3 $2"
echo "Arg2 $3"
echo "Arg4 $4"
echo "Arg5 $5"

Output:

Arg1 1
Arg2 3
Arg3 4
Arg4 5
Arg5 

```

Page 47


