
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jake',
        	password: 'password1'},
			 	{username: 'david',
 	    		password: 'password2'},
      ]);
    });
};
