import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/users')
    async getUsers(@Res() res): Promise<string> {
        const users = await this.userService.getAllUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:userId')
    async getUser(@Res() res, @Param('userId') userId): Promise<string> {
        const user = await this.userService.getUser(userId);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json(user);
    }

    @Post('/create')
    async create(@Res() res, @Body() createUserDTO: CreateUserDTO): Promise<string> {
        const user = await this.userService.addUser(createUserDTO);
        return res.status(HttpStatus.CREATED).json({
            message: 'User has been created successfully',
            user
        });
    }

    @Put('/update/:userId')
    async updateUser(@Res() res, @Param('userId') userId, @Body() createUserDTO: CreateUserDTO): Promise<string> {
        const user = await this.userService.updateUser(userId, createUserDTO);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user
        });
    }

    @Delete('/delete/:userId')
    async deleteUser(@Res() res, @Param('userId') userId): Promise<string> {
        const user = await this.userService.deleteUser(userId);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted',
            user
        });
    }
}
