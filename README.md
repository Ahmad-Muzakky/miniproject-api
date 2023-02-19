# miniproject-api

how to run api
1. Run mysql 
2. Create database name "travelio_miniproject"
3. Run query
CREATE TABLE `travelio_miniproject`.`books` ( `id` BIGINT(11) NOT NULL AUTO_INCREMENT ,
`title` VARCHAR(256) NOT NULL ,
`author` VARCHAR(256) NOT NULL ,
`link` VARCHAR(256) NOT NULL ,
PRIMARY KEY (`id`)) ENGINE = InnoDB;
4. Run server with "npm run start" || "yarn start"
