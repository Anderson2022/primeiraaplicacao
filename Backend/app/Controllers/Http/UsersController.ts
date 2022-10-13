// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@adonisjs/core/build/standalone";

export default class UsersController {


public async index({ request }: HttpContextContract){
  const data = request.only(["name", "username"])
  console.log(data)
}}
