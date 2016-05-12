/**
 * Created by RaynorChan on 3/28/16.
 * 这里有各种常量
 */
var ClientConst = {};


ClientConst.ScrumRoles =
    [
    {id:1, name:"Scrum Master"},
    {id:2, name:"Product Owner"},
    {id:3, name:"Developer"}
    ];

/**
 * @return {string}
 */
ClientConst.GetScrumRolesById = function (id) {
    var roles = ["None", "Scrum Master", "ProductOwner", "Developer"];
    return roles[id];
};
