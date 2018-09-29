var UserList = UserList || {};

UserList.UserModel = function (data) {
    var self = this;
    self.UserID = data.id;
    self.Name = data.name;
    self.Username = data.username;
    self.email = data.email;
    self.phone = data.phone;
}

UserList.UserListViewModel = function () {
    var self = this;
    self.Users = ko.observableArray([]);
    self.LoadUsers = function () {
        console.log("load users");
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            type: "GET",
            success: self.LoadUsersResponse,
            error: function (xhr, status, errorThrown) {
                console.log(xhr, status, errorThrown);
            }
        });
    }

    self.LoadUsersResponse = function (Response) {
        var mappedUsers = [];
        for (let i = 0, len = Response.length; i < len; i++) {
            var item = new UserList.UserModel(Response[i]);
            mappedUsers.push(item);
        }
        self.Users(mappedUsers);
        console.log(mappedUsers);
    }

    
}

ko.applyBindings(new UserList.UserListViewModel());
var Grid = new UserList.UserListViewModel();
Grid.LoadUsers();
