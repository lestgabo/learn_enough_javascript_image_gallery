# Sample app with gallery

This is the full starting application (with image gallery) for the final chapter of [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Michael Hartl, based on the sample application developed in [*Learn Enough CSS & Layout to Be Dangerous*](https://www.learnenough.com/css-and-layout-tutorial) by Lee Donahoe and Michael Hartl.

Learn Enough JavaScript to Be Dangerous - Chapter 11 - Full sample app: Image Gallery

- for fellow aspiring developers using an online IDE (I am using amazon aws c9) here's how I started the server:
  - choosing the JavaScript option when creating the environment, ruby is already installed
  
  ```bash
    ec2-user:~/environment/repos/le_js_full (master) $ ruby -v
    ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
  ```
  - I then installed jekyll
  
  ```bash
  ec2-user:~/environment/repos/le_js_full (master) $ gem install jekyll -v 3.5.1
  ```

  - and installed bundler
  
  ```bash
    ec2-user:~/environment/repos/le_js_full (master) $ gem install bundler
  ```
  - lastly, to start up the server 
  
  ```bash
    ec2-user:~/environment/repos/le_js_full (master) $ jekyll serve --port $PORT --host $IP
    
    
    Configuration file: none
            Source: /home/ec2-user/environment/repos/le_js_full
       Destination: /home/ec2-user/environment/repos/le_js_full/_site
     Incremental build: disabled. Enable with --incremental
          Generating... 
                        done in 0.097 seconds.
     Auto-regeneration: enabled for '/home/ec2-user/environment/repos/le_js_full'
        Server address: http://127.0.0.1:8080
      Server running... press ctrl-c to stop.
      
  ```
  
  - it says  Server address: http://127.0.0.1:8080, but the server address for mine was actually at:
  https://ec0d41913a204776951cf73ce8cdb026.vfs.cloud9.us-west-2.amazonaws.com/