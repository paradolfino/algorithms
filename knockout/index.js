var UserList = UserList || {};

UserList.UserModel = function (data) {
    var self = this;
    self.UserID = data.id;
    self.Name = data.name;
    self.Username = data.username;
    self.Email = data.email;
    self.Phone = data.phone;
}

UserList.UserListViewModel = function () {
    var self = this;
    self.Users = ko.observableArray([]);
    self.LoadUsers = function () {
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
            self.Users.push(item);
        }
        //self.Users(mappedUsers);
        
    }

    self.LoadUsers();
    
}

ko.applyBindings(new UserList.UserListViewModel(), document.getElementById("grid"));

//separate instance
//var Grid = new UserList.UserListViewModel();
//ko.applyBindings(Grid);
//Grid.LoadUsers();
//console.log(Grid.Users());
