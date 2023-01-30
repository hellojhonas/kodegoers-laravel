# Project Set-up

This is a guide on how to run the source code in your local machine. Make sure you have environment setup properly. You will need PHP8.1, composer and Node.js.

Necessary tools

- PHP
- Xampp
- Composer - make sure this is installed ([https://getcomposer.org/](https://getcomposer.org/))
- Laravel
1. Clone the Repo using Git Clone
    1. enter the following code in the chosen directory, ‘git bash here’ then `git clone https://github.com/hellojhonas/kodegoers.git`
2. Open the folder in VS code.
3. Create a `.env` file in the root directory and copy the text inside `.env.example`
4. In the `.env` file. To get started 
    
    Option A: Real quick with the database, comment out `DB_HOST until DB_PASSWORD` . Then just enter sqlite for the DB_Connection.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fcbb33de-60bf-49a0-bcc4-366ca4b6d48f/Untitled.png)
    
    Option B: Have your local MySQL Database Ready with your preferred DB_Database.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c0af1af-36df-4aa2-9c71-0e985f6b0772/Untitled.png)
    
5. Open a terminal and navigate to the project's root directory 
6. Run `*composer install*`
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05146e65-30e8-4b3e-b9e3-cc12b88658ec/Untitled.png)
    
7. Set the encryption key by executing `php artisan key:generate --ansi`
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10ed5d68-bb3c-4b1a-aff7-55a07535109a/Untitled.png)
    
8. Run migrations `php artisan migrate --seed`
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5af3038c-3424-4945-816b-719c839f6656/Untitled.png)
    
9. Start local server by executing `php artisan serve`
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a52cc099-0313-45a3-91e0-c3b47637d354/Untitled.png)
    
10. Go to the react folder, create a `.env` file then Copy `react/.env.example` into `.env` 
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dcee76-981a-47e9-b5dd-c45921acf64d/Untitled.png)
    
11. Open another new terminal and navigate to the `react` folder
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fbfac37-74b0-4f1b-b9a2-165dafe7039f/Untitled.png)
    
12. Run `npm install` to install necessary packages.
13. Lastly, run `npm run dev` to start vite server for React
14. Make sure the Back-end is up and running with the command: `php artisan serve` in step 9. then click/open the provided uri from `npm run dev`: `http://localhost:3000/`