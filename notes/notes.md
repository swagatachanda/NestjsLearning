nest

server -project

module-1 (auth) folder

1. controller file - AuthController - express(Route file) -{ endpoints "/" , func }
2. module file - AuthModule - {import: [user] , controller:[AuthController], providers:[AuthService], export:[] }
3. service file - AuthService - Express(Controller)

---

functions - login, signup

module-2 (blog)

1. controller file
2. module file
3. service file

module-2 (user)

1. controller file - UserController
2. module file - UserModule - {import: [] , controller:[UserController], providers:[UserService], export:[UserService] }
3. service file - UserService

---

function - CRUD

DTO - Data Transfer Object - class

signup - email, password, name, address, pincode, phone number

create-signup.dto.ts

export class CreateSignupDto{
email
password
name
address
pincode
phoneNumber

}

---

{ Pipes, Guard, Interceptors } = middleware

Pipe

Pipes -> you can return anything
Int -> ParseIntPipe (in-built pipes provided by nest)

request -> ParseIntPipe(Transforms string to INT) -> BlahPipe -> service function (someValue:number)
middleware

for a login -> you need to check whether the user is valid or not

login request (email, password) -> UserIsValid(email) -> logic -> return

````function UserIsValid(email:string) : User {
      const verifyUser = DB_REFER and findOne({email})
        if(!verifyUser){
            Not found error
        }
      return verifyUser
}```

IsObjectIdPipe ( string ? mongo object id )





Guard

Guard -> you can return only boolean (true/false)

request -> guard (checks wheher the JWT is valid or not) true -> if valid, service function
                                                         false-> if not valid, 403 error

guard is always use for authentication and authorization.



Interceptors

request -> interceptor  ->  servicefunction -> iterceptor    -> response

before response,

```
  {
    success: true,
    data:{
      ...some data
    }
  }
```

servicefunction is returning -> [true,["ram", "sam"]] -> interceptor will take this data nd tranform into

```{
    success: result[0],
    data: result[1]
} ```

-> response

---

Decorator

@decorator

HTTP methods -> @Get() ,  @Post(), @Put() , @Patch(), @Delete()

Controller File

@Post('/create')
createNewBlog(@Body() createNewBlogBody: any ): any{
  return serviceFunction(createNewBlogBody)
}

@Get('/:topic/:blog')
findBlogbyName(@Param('topic') topicBlog:string, @Param('blog') blogName: string): any{
  return serviceFunction(topicBlog, blogName)
}

@Get('/:topic/:id')
findBlogbyId(@Param('topic') topicName: string, @Param('id' , IsMongoObjectIdPipe, IsBlogValid) blogId: ObjectId) :any {
    return serviceFucntion(topicName, blogId)
}

interface BlogQuery{
  id:ObjectId
  name?:string
  tags?:string
}

@Get('/blog')
findBlog(@Query() blogQueries: BlogQuery) : Blog[] {
  return serviceFunction(queblogQueriesry)
}

/blog?id=12212&text=helloo&tags=we,err

blogQueries = {
  id:'12212',
  text: helllo
  tags: 'we,err'
}

xxxxx
AuthJWTGuard -> whether JWT is valid or not , if valid, search for user and if found, store the user data in req.user

We have to create a custom decorator to get the user data store in req.user

... LoggedUser ... {
  ....
  return req.user
}


@Get('/blog')
@UseGuard(AuthJWTGuard) -> true/false
findBlog(@Query() blogQueries: BlogQuery, @LoggedUser() loggedUserId) : Blog[] {
  return serviceFunction(queblogQueriesry, loggedUserId)
}

---
service file - user.service.ts

@Injectable()
export class UserService{}



controller file - user.controller.ts

@Controller('user')
export class UserController{

  @Get()
  getUser(...){
    return ...
  }
  endpoint - /user/

  @Post('/create')
  createUser(...){
    retrun ...
  }
  endpoint - /user/create
}


Module file - user.module.ts

@Module({
  import:[],
  controller:[UserController],
  provider:[UserService],
  export:[]
})
export class UserModule{}


---

Typescript - JS with types

type:

1. number
2. string
3. boolean
4. any
5. undefined
6. object ------- Record<string,any>

{
hello: {
hi:
}
}

customs types-

const student1:StudentDetailInterface={
id: 1,
name: "Pratyay"
class: 11,
sec: b,
address: "some address",
}

type StudentDetailType={
id: number,
name: string,
class: number,
sec: string,
address:string
phoneNumber?: number
}

interface StudentDetailInterface={
id: number,
name: string,
class: number,
sec: string,
address:string
phoneNumber?: number
}

function xyz(){
return {
Id: 1,
name: "Pratyay"
class: 11,
sec: b,
address: "some address",
}
}

const studentdet1:StudentDetailInterface = xyz()
studentdet1.phoneNumber = 123222221

class

class car(){
doors:number
private color: string
}

class SUV extends car{
id:number,
name: string
constructor(sec: number){}
function(){
console.log(this.id , this.name, this.sec)
}
}
````

PS C:\Users\KIIT\Desktop\myProjects\nestjs\myfirstproject> npm i @nestjs-modules/mailer nodemailer    
npm WARN ajv-keywords@3.5.2 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs-modules/mailer@1.6.1 requires a peer of pug@^2.0.4 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @nestjs-modules/mailer@1.6.1
+ nodemailer@6.7.2

97 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
PS C:\Users\KIIT\Desktop\myProjects\nestjs\myfirstproject> npm i handlebars
npm WARN @nestjs-modules/mailer@1.6.1 requires a peer of pug@^2.0.4 but none is installed. You must install peer dependencies yourself.
npm WARN ajv-keywords@3.5.2 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ handlebars@4.7.7
97 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
PS C:\Users\KIIT\Desktop\myProjects\nestjs\myfirstproject> npm i @nestjs-modules/mailer nodemailer handlebars
npm WARN ajv-keywords@3.5.2 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs-modules/mailer@1.6.1 requires a peer of pug@^2.0.4 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ handlebars@4.7.7
+ @nestjs-modules/mailer@1.6.1
+ nodemailer@6.7.2

81 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
PS C:\Users\KIIT\Desktop\myProjects\nestjs\myfirstproject> nest g module mail
CREATE src/mail/mail.module.ts (81 bytes)
UPDATE src/app.module.ts (800 bytes)
PS C:\Users\KIIT\Desktop\myProjects\nestjs\myfirstproject> nest g service mail
CREATE src/mail/mail.service.spec.ts (446 bytes)
CREATE src/mail/mail.service.ts (88 bytes)
UPDATE src/mail/mail.module.ts (155 bytes)