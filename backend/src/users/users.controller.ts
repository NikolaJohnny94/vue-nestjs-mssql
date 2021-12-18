import { Controller, Param, Body, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessageInterface } from './interfaces/message.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async allUsers(@Res({ passthrough: true }) res: Response): Promise<MessageInterface> {
        try {
            const allUsers = await this.usersService.getUsers()
            res.status(HttpStatus.OK)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: 'Users successfully retrieved from the database!',
                users: allUsers
            }
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST)
            return {
                success: false,
                status: `${HttpStatus.BAD_REQUEST} | BAD REQUEST`,
                message: `Failed to retrive users from the database!`,
            }
        }
    }

    @Get(':id')
    async singleUser(@Param('id') id, @Res({ passthrough: true }) res: Response): Promise<MessageInterface> {
        const newUser = await this.usersService.getUserById(id)

        if (newUser) {
            res.status(HttpStatus.OK)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: `User with the id: ${id} was successfully found in the database!`,
                user: newUser
            }
        } else {
            res.status(HttpStatus.NOT_FOUND)
            return {
                success: false,
                status: `${HttpStatus.NOT_FOUND} | Not Found`,
                message: `User with the id: ${id} was not found in the database!`,
            }
        }


    }

    @Post()
    async addNewUser(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response): Promise<MessageInterface> {
        try {
            await this.usersService.createUser(createUserDto)
            res.status(HttpStatus.CREATED)
            return {
                success: true,
                status: `${HttpStatus.CREATED} | CREATED`,
                message: 'User successfully created!'
            }
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST)
            return {
                success: false,
                status: `${HttpStatus.BAD_REQUEST} | BAD REQUEST`,
                message: `Failed to create new user!`,
            }
        }
    }

    @Put(':id')
    async editUser(@Param('id') id, @Body() updateUserDto: UpdateUserDto, @Res({ passthrough: true }) res: Response): Promise<MessageInterface> {
        try {
            await this.usersService.updateUser(id, updateUserDto)
            res.status(HttpStatus.OK)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: `User with the id: ${id} was successfully updated!`,
            }
        } catch (error) {
            console.log(error.message)
            res.status(HttpStatus.NOT_FOUND)
            return {
                success: false,
                status: `${HttpStatus.NOT_FOUND} | Not Found`,
                message: `User with the id: ${id} was not found in the database!`,
            }

        }

    }


    @Delete(':id')
    async removeUser(@Param('id') id, @Res({ passthrough: true }) res: Response): Promise<MessageInterface> {
        try {
            await this.usersService.deleteUser(id)
            res.status(HttpStatus.OK)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: `User with the id: ${id} was successfully deleted!`,
            }
        } catch (error) {
            console.log(error.message)
            res.status(HttpStatus.NOT_FOUND)
            return {
                success: false,
                status: `${HttpStatus.NOT_FOUND} | Not Found`,
                message: `User with the id: ${id} was not found in the database!`,
            }

        }


    }

}
