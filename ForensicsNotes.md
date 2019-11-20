# DAY-1

## SIEM

### What is SIEM
SIEM tools aggregate data from multiple systems and analyze that data to catch abnormal behavior or potential cyberattacks. SIEM tools provide a central place to collect events and alerts
SIEM is a data aggregator, search, and reporting system

### How it works
![img](https://blogvaronis2.wpengine.com/wp-content/uploads/2019/06/siem-process-2.png)

### Functions of SIEM
![x](https://blogvaronis2.wpengine.com/wp-content/uploads/2019/06/siem-capabilities-1.png)

### Examples:

- Splunk
- IBM Qradar
- LogRhythm


# SOC
A security operations center (SOC) is a facility that houses an information security team responsible for monitoring and analyzing an organization’s security posture on an ongoing basis. The SOC team’s goal is to detect, analyze, and respond to cybersecurity incidents using a combination of technology solutions and a strong set of processes. Security operations centers are typically staffed with security analysts and engineers as well as managers who oversee security operations. SOC staff work close with organizational incident response teams to ensure security issues are addressed quickly upon discovery.

The while SOC center can be divided into 4 parts/tiers and each of them have their own responsibility.

### SOC 1
![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/1.png)
### SOC 2
![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/2.png)

### SOC 3
![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/3.png)

### SOC 4

![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/4.png)


# Reactive and Pro Active Security Approaches

### Reactive
A reactive network security strategy is akin to a mousetrap: Set it and check it when it has gone off. But what if the IT staff misses that it caught something, or even worse, it misses the hacking attempt altogether? The former gives cyberattackers more time to get around the protocols in place, while the latter could bring down the entire network. It's a costly strategy that waits until something is broken before fixing it, but at that point the expenses can get out of hand. Legal and regulatory fees, reparation for any personal information stolen and a hit to reputation can be devastating.
### pro-active
A proactive approach utilizes a variety of mechanisms to continuously monitor network traffic. This is done in part to avoid the inherent flaw with patches: the fact that they don't always work, the Computer Crime Research Center reported. In fact, a fatal flaw in IT is relying on system updates to defend against every hacking attempt. It's a tall order when cyberattackers bring out a new method every few months.


# APT

### What is an APT
An advanced persistent threat (APT) is a prolonged, aimed attack on a specific target with the intention to compromise their system and gain information from or about that target.

The target can be a person, an organization or a business. When these threats were dubbed their targets were governments and military organizations. The word threat doesn’t mean to imply that there is only one kind of malware involved, because an APT usually consists of several different attacks.

Too many professionals in the security field an attack only qualifies as an APT if it is initiated by a government (agency) or a similar organization. Given the needed resources and patience this certainly make sense.

###Stages of an Advanced Persistent Threat
Not all of the stages listed below will be necessary in every situation and, depending on the target and the information that the attackers are after, the tasks in the list can be very different in time, and the amount of effort, spent on them. These can be very different from case to case.

- Get to know the target. This can vary from figuring out if there is anything worth stealing to compiling a list of employees, or even better, disgruntled ex-employees. Find out what interests the subjects, so you can use that information. in or spear-phishing attacks.
- Finding an entrance. This usually involves social engineering techniques like spear phishing and watering holes in order to deliver customized malware.
- Accomplishing a foothold. Get a target to run the malware on his system which is inside the targets network.
- Carefully widen the scope from the created foothold. For example reconnaisance of the network from an infected computer. This includes putting malware and other tools on the compromised system and hiding them.
- Find and steal the sought after or other valuable information. To do so, it may be necessary to raise the privileges of the compromised ssytem in the network.
- Once a firm grip on the network is established it may be necessary to move or widen the entry points in the network so a more permanent access to the information is secured. If there is no need for a permanent monitoring, the tools will usually be removed to cover up the tracks. Sometimes a backdoor is left in place to make a return easier.
