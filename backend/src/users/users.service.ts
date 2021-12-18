import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { UserInterface } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getUsers(): Promise<UserInterface[]> {
        const allUsers = await this.userRepository.find()
        return allUsers
    }

    async getUserById(id: number): Promise<UserInterface> {
        const userById = await this.userRepository.findOne(id)
        return userById
    }

    async createUser(user: CreateUserDto): Promise<void> {
        const newUser = await this.userRepository.create(user)
        await this.userRepository.save(newUser)
    }

    async updateUser(id: number, user: UpdateUserDto): Promise<UserInterface> {
        const userById = await this.userRepository.findOne(id)
        await this.userRepository.update(id, user)
        return userById
    }

    async deleteUser(id: number): Promise<UserInterface> {
        const userById = await this.userRepository.findOne(id)
        await this.userRepository.delete(userById)
        return userById
    }
}
