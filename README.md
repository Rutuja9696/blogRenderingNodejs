# blogRenderingNodejs

#1.TITLE:\
 Blog rendering backed

#2.DESCRIPTION: \
 This aims to create backend for the blogs.This project is done using express server.Output is viewed on Postman.
#3.FILE DETAILS:\
 a.controller:\
 This file contains all the functions of actions that can be performed.Here ,it includes the controller to fetch all the blogs ,fetch blogs by id and fetch blogs blogs by query parameters.\
 b.data:\
 All the data on which the operation is to be performed is included in this folder .All the data is been targetted to data.json file. Thus the data is in the form of json .\
 c.helpers:\
 It consists of the class and function to send the response such as successful or unsuccessful or error while running the code.\
 d.routes:\
 Routes is the route handler for all the functions,etc. \
 e.app.js:\
 This is the main entry point. It contains path to all the routes.Also the port on which the server is running will listen from this entry point.\
 f.package.json:\
 It has a record of details such as name,version,description,dependencies,script,author,repository,etc with respect to the current folder.

#OUTPUT:\
steps to view output:\
1.Install postman.\
2.Login with required credentials.\
3.create new collection (name:blogRendering).\
4.Add request (get) for get-all-blogs (url:http://localhost:3000/blogs) \
5.Add request (get) for get-blog-by-id (url:http://localhost:3000/blogs/2rvqpdbpka3n3fhd) \
6.add request (get) for get-blog-by-query-parameter (url:http://localhost:3000/blogs/?id=2rvqpdbpka3n3fhd)

#DEMO:\
refer the heroko link to view the demo (link:)
