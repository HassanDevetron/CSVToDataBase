# CSV to DataBase

Steps to run this project:

1. Run `npm i` command
2. Since I have not used the migration this time around so as a fallback head to ormconfig.json and set `synchronize` to `true`
3. Run `npm run dev` command
4. Once the `Revenue` table is created set `synchronize` back to `false`
5. Run the code and hit the endpoint `/get-csv-revenues`
6. Consult the endpoint `/revenue` to see the result after the csv to database insertion.


If you find any difficulty getting the project to work, please do let me know. Thank you.
