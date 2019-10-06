ctrl + b and c 	--	Creat a new window
ctrl + b and ,	--	Rename a current window
ctrl + b and p  --	Go to Previous Window
ctrl + b and n	--	Go to Next Window
ctrl + b and w  --	List The Windows
ctrl + b and %  --	Splits window Verticaly




ctrl + b and : then type "splite window"  -- 	Give Commands to Tmux



If You want to run log time commands on you SSH server 
$ssh root@10.10.10.11 
$tmux new -s dirbustersession
$Start-Your-long-running-process
>>ctrl + b and d [detach from the session]
[i] Now you can Exit and go to sleep and your process will be running on Your ssh Machine
$logout
> You will be back to original machine

After some time 

$ssh root@10.10.10.11 
$tmux list-sessions
