### Installation

```
apt install docker-engine
```

### starting docker service
```
sudo service docker start
```

### Pulling an image
```
docker pull ubuntu
```

---

### Running an image

```
sudo docker run -it ubuntu
```


### list running dockers
```
sudo docker ps
```

## Docker File

a Docker file contains command and arguments


#### FROM

The from command specifies the base docker image for this image
```
FROM ubuntu
```

#### RUN 
is used to execute commands on Host OS. It can be used to build or run docker images

```
RUN apt install go-lang
```

#### CMD
is used to execute commands on Host OS. It cannot be used to build or run docker images
```
CMD "echo" "hello world"
```


#### ENTRYPOINT
is the first command that will be executed on the docker after being build and executed. If we have any cmd command before it. It will override the CMD commands.
```
ENTRYPOINT "echo" "Welcome"
```


#### ADD
is used to cp files from Host to docker or docker to docker 
```
ADD /folder1 folder2
```
 
 #### ENV
 set for docker environmetn variables
 ```
 ENV key value
 ```
 
 ### WORKDIR
 
used to set the working directory while booting a docker container

```
WORKDIR /path/to/dir
```

#### EXPOSE

specifies the port number 
```
EXPOSE 8080
```

#### USER
allowing only specific user to execute the docker
```
USER UID
```

#### VOlUME
allows to specify to use any specific folder to save files for the container
```
VOLUME /path/to/dir
```

 
 
 
 
 
 


