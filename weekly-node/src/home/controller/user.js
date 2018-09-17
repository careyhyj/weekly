const Base = require('./base');
module.exports = class extends Base {
    async loginAction() {
        let {usernum, password} = this.post();
        const salt = 'weekly';
        password = think.md5(salt + password);
        console.log(password,'111111111111111111111111111111111111111111111111');
        try {
            let user = await this.model('user').where({
              usernum,
            }).find();
            if(user.password && user.password == password) {
                // login success
                await this.session('userInfo',user);
                return this.success(user);
            } else {
                return this.fail("用户名或密码错误")
            }
        }
        catch(e) {
            console.log(e);
            return this.fail("登录失败")
        }
    }
    async queryuserAction() {
        try {
           console.log(this.user,'22222222222222222222222222');
           this.user = {
             company_name: this.user.company_name,
             department_name: this.user.department_name,
             email: this.user.email,
             role: this.user.role,
             role_name: this.user.role_name,
             username: this.user.username,
             usernum: this.user.usernum,
             telephone: this.user.telephone
           }
            return this.success(this.user);
        } catch(e) {
            console.log(e);
            return this.fail(e);
        }
    }
    async logoutAction() {
        try {
            await this.session(null);
            return this.success("登出成功");
        } catch(e) {
            return this.fail(`登出失败${e}`)
        }
    }

    async changepassAction () {
        let {
            usernum,
            oldpassword,
            newpassword
        } = this.post()
        try {
            let user = await this.model('user').where({
              usernum,
            }).find();
            const salt = 'weekly';
            oldpassword = think.md5(salt + oldpassword);
            console.log(usernum, user.password, oldpassword, 'dsaaaaaaaaaaaaaaaaaaaaaaa')
            if(user.password && user.password == oldpassword) {
                // login success
                const salt = 'weekly';
                newpassword = think.md5(salt + newpassword);
                await this.model('user').where({
                  usernum
                }).update({
                  usernum,
                    password: newpassword
                })
                return this.success("修改成功");
            } else {
                return this.fail("原密码错误");
            }
        } catch(e) {
            return this.fail('修改失败');
        }
    }
    async registerAction() {
        let company_id = this.user.company_id;
        let company_name  = this.user.company_name;
        let department_id = this.user.department_id;
        let department_name = this.user.department_name;
        let {username, usernum, email, telephone} = this.post();
        try {
            let userExist = await this.model('user').where({
              usernum
            }).select();
            if(!think.isEmpty(userExist)) {
                return this.fail("工号已经存在");
            }
            const salt = 'weekly';
            let password = think.md5(salt + '123456');
            await this.model('user').add({
              usernum, username, telephone, role: 4, role_name: '成员', password, email, company_id, company_name, department_id, department_name
            });
            return this.success("添加成功");
        } catch(e) {
            return this.fail("添加失败", e);
        }
    }
}
