Tic-Tac-Toe
===============================

## The Brief

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken
* Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## Technologies Used

* JavaScript
* Jasmine - testing framework

## Approach

Here I will add notes on my approach as I work on the project. This will include decisions I make at various points. This will be replaced with cleaner documentation on completion, though anyone (myself included) going through the commit history will be able to get more information on my decisions as I was making them.

* How will the user select a field? I had considered using an X and Y axis requiring the user to pass in two values to the `#play` method. This might make the method more extensible if the grid needed to be larger later. However, for the needs of a 3x3 board, referencing each field by a number from 1 to 9 seems sensible.
* Instead of each field knowing about its neighbour fields, I will use line objects which know about three fields. This will allow the logic for each line to be the same.
* The responsibility for checking the fields for three matching values should belong to the line.
* Reviewing the brief, each section of the board is referred to as a 'field'. To avoid confusion, I have renamed my Cell object to Field, and my Field Object to Line.
* I've used helper methods to unpack the values of the position properties for each of the fields which Board creates. This feels like a lot of setup for a test, but I can't see a solution which adequately ensures the number and ordering of new fields in the board.
* I realised that my #play method in game was calling board too frequently, and that it made sense to delegate many of those responsibilities to board itself. I will now go back and give board its own #play method which game calls.
