## Design of the MiniFB Schema

As outlined in the README, the main features of this mini app will require the use of at least three tables: one for users, one for posts, and one for friendships. I don't especially see a need for extraneous databases at this point, so we will just use those three.

# Users
Each entry in the users table should have the following attributes:
* id (int): a unique user id, which can be used as the key
* first_name (string): the user's first name
* last_name (string): the user's last name - we won't consider special characters
* birthdate (date): the user's date of birth, which we can represent as a date type
* gender: the user's gender (male, female, other)
* password (varchar): the user's password - ideally this is encrypted using some hash
* bio (string): the user's bio
* university (string): as a nod to "old" FB, where users needed to be affiliated with a university; we will not consider creating a full-fledged university table in itself, though, as that's beside the point
* email (string): the user's email

# Posts
Each post can be made by a specific user, which warrants the following the attributes:
* id (int): a unique post id, which can be used as the key
* user_id (int): referring to the id (in table Users) of the user who made the post. This is a one-to-many relationship (one user id might be associated with many posts)
* content (string): the post's (text) content, which we can cap at 4000 characters
* date (date): when the post was made
* likes (int): the number of likes the post has; as a future modification this could hold a collection of user_ids, signifying the particular users who've liked the post

# Friends
Friendships can be made between any two users. With the specification of a requestor/requested user, we can think of this as a directed graph.
* id (int): a unique id to represent each friend request sent
* requestor_id (int): the id of the user who sent the friend request
* requested_id (int): the id of the user who received the friend request; these are references to the id in the users table, which represents a many-to-many relationship (each user can request many friend requests, each user can receive many friend requests)
* status (bool): true for accepted, false for rejected; to keep things succinct, a false response could prompt the deletion of the entry
* date (date): when the request was sent
* type (string): optional - could specify categories such as acquaintances, close friends, relationships, etc.
