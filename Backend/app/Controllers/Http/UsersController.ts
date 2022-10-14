import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User"

export default class UsersController {
public async create({ request }: HttpContextContract){
  const { username, name, password} = request.only(["name", "username", "password"])

  const user = await User.create({
      username,
      name,
      password,
  })

  return user;
}}
