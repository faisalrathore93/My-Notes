
# ASAM-CONF-009: Improper Services permissions

#  escription:
At this stage, the attacker will list the necessary permissions in order to launch each service. With this information, it is possible to obtain the attack surface both from inside and outside the application environment, so the attacker could learn better how to attack the application security in the future.
For instance, a service performing functionalities requiring special permissions and that can be launched outside the application (exported) and does not require permissions, compromises security due to the fact that it enables the service to be launched by any device application.

#  isks:
The risks vary depending on the functionality’s sensibility of each service.

#  ecommendations:
As a general rule, it is recommended to require permissions in the services performing sensitive functionalities, particularly if they are exported services.

#  eferences:
1. http://developer.android.com/guide/topics/security/permissions.html
