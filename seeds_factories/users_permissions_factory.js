function UserPermissionsFactory() {

    this.permissions = [
        {
            moduleId: 1,
            permissions: [
                { title: 'Permite criar e deletar produtos' },
                { title: 'Permite atualizar produtos' },
            ]
        },
        {
            moduleId: 2,
            permissions: [
                { title: 'Permite criar e deletar promoções' },
                { title: 'Permite atualizar promoções' },
                { title: 'Permite criar landing pages' },
                { title: 'Permite enviar notificações aos usuários' },
            ]
        },
        {
            moduleId: 3,
            permissions: [
                { title: 'Permite criar e deletar Usuários' },
                { title: 'Permite atualizar Usuários' },
            ]
        },
        {
            moduleId: 4,
            permissions: [
                { title: 'Permite criar e deletar Tipo de cliente' },
                { title: 'Permite atualizar Tipo de cliente' },
            ]
        },
        {
            moduleId: 5,
            permissions: [
                { title: 'Permite aprovar comanda' },
                { title: 'Permite adicionar valores na comanda' },
                { title: 'Permite remover valores na comanda' },
            ]
        },
        {
            moduleId: 6,
            permissions: [
                { title: 'Permite alterar logo' },
            ]
        },
    ]

    this.permissionsParsed = function () {
        let parsed = [];
        let idx = 1;
        this.permissions.forEach((module) => {

            module.permissions.forEach((permission) => {
                parsed.push({
                    id: idx,
                    title: permission.title,
                    module_id: module.moduleId
                })

                idx++;
            })

        })

        return parsed;
    }

    /**
     * Pegar os ids das permissões do banco, conforme o modulo. Se não enviasr modulo, pegar todas
     * @param modulesIds
     */
    this.permissionsIds = function (modulesIds) {
        let idx = 1;
        let ids = [];
        this.permissions.forEach((module) => {
            module.permissions.forEach((permission) => {
                if (!modulesIds || modulesIds.indexOf(module.moduleId) >= 0) {
                    ids.push(idx);
                }
                idx++;
            })
        })

        return ids;
    }

    return this;
}

const userPermissionsFactory = new UserPermissionsFactory()

module.exports = userPermissionsFactory
