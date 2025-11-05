# Ejercicios SQLBolt

## Ejercicio 1

### Tabla

| id | title               | director        | year | length_minutes |
|----|---------------------|-----------------|------|----------------|
| 1  | Toy Story           | John Lasseter   | 1995 | 81             |
| 2  | A Bug's Life        | John Lasseter   | 1998 | 95             |
| 3  | Toy Story 2         | John Lasseter   | 1999 | 93             |
| 4  | Monsters, Inc.      | Pete Docter     | 2001 | 92             |
| 5  | Finding Nemo        | Andrew Stanton  | 2003 | 107            |
| 6  | The Incredibles     | Brad Bird       | 2004 | 116            |
| 7  | Cars                | John Lasseter   | 2006 | 117            |
| 8  | Ratatouille         | Brad Bird       | 2007 | 115            |
| 9  | WALL-E              | Andrew Stanton  | 2008 | 104            |
| 10 | Up                  | Pete Docter     | 2009 | 101            |
| 11 | Toy Story 3         | Lee Unkrich     | 2010 | 103            |
| 12 | Cars 2              | John Lasseter   | 2011 | 120            |
| 13 | Brave               | Brenda Chapman  | 2012 | 102            |
| 14 | Monsters University | Dan Scanlon     | 2013 | 110            |

#### Find the title of each film

```
SELECT Title FROM movies;
```

#### Find the director of each film

```
SELECT Director FROM movies;
```

#### Find the title and director of each film

```
SELECT Title, Director FROM movies;
```

#### Find the title and year of each film

```
SELECT Title, Year FROM movies;
```

#### Find all the information about each film

```
SELECT * FROM movies;
```

## Ejercicio 2

### Tabla

| id | title               | director        | year | length_minutes |
|----|---------------------|-----------------|------|----------------|
| 1  | Toy Story           | John Lasseter   | 1995 | 81             |
| 2  | A Bug's Life        | John Lasseter   | 1998 | 95             |
| 3  | Toy Story 2         | John Lasseter   | 1999 | 93             |
| 4  | Monsters, Inc.      | Pete Docter     | 2001 | 92             |
| 5  | Finding Nemo        | Andrew Stanton  | 2003 | 107            |
| 6  | The Incredibles     | Brad Bird       | 2004 | 116            |
| 7  | Cars                | John Lasseter   | 2006 | 117            |
| 8  | Ratatouille         | Brad Bird       | 2007 | 115            |
| 9  | WALL-E              | Andrew Stanton  | 2008 | 104            |
| 10 | Up                  | Pete Docter     | 2009 | 101            |
| 11 | Toy Story 3         | Lee Unkrich     | 2010 | 103            |
| 12 | Cars 2              | John Lasseter   | 2011 | 120            |
| 13 | Brave               | Brenda Chapman  | 2012 | 102            |
| 14 | Monsters University | Dan Scanlon     | 2013 | 110            |

#### Find the movie with a row id of 6 

```
SELECT * FROM movies WHERE id = 6;
```

#### Find the movies released in the years between 2000 and 2010

```
SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010;
```

#### Find the movies not released in the years between 2000 and 2010

```
SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010;
```

#### Find the first 5 Pixar movies and their release year

```
SELECT * FROM movies WHERE Year BETWEEN 1995 AND 2003;
```

## Ejercicio 3

### Tabla

| id | title               | director        | year | length_minutes |
|----|---------------------|-----------------|------|----------------|
| 1  | Toy Story           | John Lasseter   | 1995 | 81             |
| 2  | A Bug's Life        | John Lasseter   | 1998 | 95             |
| 3  | Toy Story 2         | John Lasseter   | 1999 | 93             |
| 4  | Monsters, Inc.      | Pete Docter     | 2001 | 92             |
| 5  | Finding Nemo        | Andrew Stanton  | 2003 | 107            |
| 6  | The Incredibles     | Brad Bird       | 2004 | 116            |
| 7  | Cars                | John Lasseter   | 2006 | 117            |
| 8  | Ratatouille         | Brad Bird       | 2007 | 115            |
| 9  | WALL-E              | Andrew Stanton  | 2008 | 104            |
| 10 | Up                  | Pete Docter     | 2009 | 101            |
| 11 | Toy Story 3         | Lee Unkrich     | 2010 | 103            |
| 12 | Cars 2              | John Lasseter   | 2011 | 120            |
| 13 | Brave               | Brenda Chapman  | 2012 | 102            |
| 14 | Monsters University | Dan Scanlon     | 2013 | 110            |
| 87 | WALL-G              | Brenda Chapman  | 2042 | 97             |

#### Find all the Toy Story movies 

```
SELECT * FROM movies WHERE Title LIKE "Toy Story%";
```

#### Find all the movies directed by John Lasseter

```
SELECT * FROM movies WHERE Director = "John Lasseter";
```

#### Find all the movies (and director) not directed by John Lasseter

```
SELECT * FROM movies WHERE Director != "John Lasseter";
```

#### Find all the WALL-* movies

```
SELECT * FROM movies WHERE Title LIKE "WALL-%";
```

## Ejercicio 4

### Tabla

| id | title               | director        | year | length_minutes |
|----|---------------------|-----------------|------|----------------|
| 1  | Toy Story 2         | John Lasseter   | 1999 | 93             |
| 2  | WALL-E              | Andrew Stanton  | 2008 | 104            |
| 3  | Monsters University | Dan Scanlon     | 2013 | 110            |
| 4  | Toy Story           | John Lasseter   | 1995 | 81             |
| 5  | Brave               | Brenda Chapman  | 2012 | 102            |
| 6  | Ratatouille         | Brad Bird       | 2007 | 115            |
| 7  | A Bug's Life        | John Lasseter   | 1998 | 95             |
| 8  | Up                  | Pete Docter     | 2009 | 101            |
| 9  | Toy Story 3         | Lee Unkrich     | 2010 | 103            |
| 10 | Cars                | John Lasseter   | 2006 | 117            |
| 11 | Monsters, Inc.      | Pete Docter     | 2001 | 92             |
| 12 | Cars 2              | John Lasseter   | 2011 | 120            |
| 13 | The Incredibles     | Brad Bird       | 2004 | 116            |
| 14 | Finding Nemo        | Andrew Stanton  | 2003 | 107            |

#### List all directors of Pixar movies (alphabetically), without duplicates

```
SELECT DISTINCT Director FROM movies ORDER BY Director;
```

#### List the last four Pixar movies released (ordered from most recent to least)

```
SELECT * FROM MOVIES ORDER BY Year DESC LIMIT 4;
```

#### List the first five Pixar movies sorted alphabetically

```
SELECT * FROM MOVIES ORDER BY Title ASC LIMIT 5;
```

#### List the next five Pixar movies sorted alphabetically

```
SELECT * FROM MOVIES ORDER BY Title ASC LIMIT 5 OFFSET 5;
```


## Ejercicio 5

### Tabla

| city                  | country       | population | latitude   | longitude    |
|-----------------------|---------------|------------|------------|-------------|
| Guadalajara           | Mexico        | 1500800    | 20.659699  | -103.349609 |
| Toronto               | Canada        | 2795060    | 43.653226  | -79.383184  |
| Houston               | United States | 2195914    | 29.760427  | -95.369803  |
| New York              | United States | 8405837    | 40.712784  | -74.005941  |
| Philadelphia          | United States | 1553165    | 39.952584  | -75.165222  |
| Havana                | Cuba          | 2106146    | 23.05407   | -82.345189  |
| Mexico City           | Mexico        | 8555500    | 19.432608  | -99.133208  |
| Phoenix               | United States | 1513367    | 33.448377  | -112.074037 |
| Los Angeles           | United States | 3884307    | 34.052234  | -118.243685 |
| Ecatepec de Morelos   | Mexico        | 1742000    | 19.601841  | -99.050674  |
| Montreal              | Canada        | 1717767    | 45.501689  | -73.567256  |
| Chicago               | United States | 2718782    | 41.878114  | -87.629798  |

#### List all the Canadian cities and their populations

```
SELECT * FROM north_american_cities WHERE Country = "Canada";
```

#### Order all the cities in the United States by their latitude from north to south

```
SELECT * FROM north_american_cities WHERE Country = "United States" ORDER BY Latitude DESC;
```

#### List all the cities west of Chicago, ordered from west to east

```
SELECT * FROM north_american_cities WHERE Longitude < -87.629798 ORDER BY Longitude;
```

#### List the two largest cities in Mexico (by population)

```
SELECT * FROM north_american_cities WHERE Country = "Mexico" ORDER BY Population DESC LIMIT 2;
```

#### List the third and fourth largest cities (by population) in the United States and their population

```
SELECT City, Population FROM north_american_cities WHERE Country = "United States" ORDER BY Population DESC LIMIT 2 OFFSET 2;
```

## Ejercicio 6

### Tablas

| id | title               | director        | year | length_minutes |
|----|---------------------|----------------|------|----------------|
| 1  | Toy Story           | John Lasseter  | 1995 | 81             |
| 2  | A Bug's Life        | John Lasseter  | 1998 | 95             |
| 3  | Toy Story 2         | John Lasseter  | 1999 | 93             |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92             |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107            |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116            |
| 7  | Cars                | John Lasseter  | 2006 | 117            |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115            |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104            |
| 10 | Up                  | Pete Docter    | 2009 | 101            |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103            |
| 12 | Cars 2              | John Lasseter  | 2011 | 120            |
| 13 | Brave               | Brenda Chapman | 2012 | 102            |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110            |


| movie_id | rating | domestic_sales | international_sales |
|----------|--------|----------------|-------------------|
| 5        | 8.2    | 380843261      | 555900000         |
| 14       | 7.4    | 268492764      | 475066843         |
| 8        | 8      | 206445654      | 417277164         |
| 12       | 6.4    | 191452396      | 368400000         |
| 3        | 7.9    | 245852179      | 239163000         |
| 6        | 8      | 261441092      | 370001000         |
| 9        | 8.5    | 223808164      | 297503696         |
| 11       | 8.4    | 415004880      | 648167031         |
| 1        | 8.3    | 191796233      | 170162503         |
| 7        | 7.2    | 244082982      | 217900167         |
| 10       | 8.3    | 293004164      | 438338580         |
| 4        | 8.1    | 289916256      | 272900000         |
| 2        | 7.2    | 162798565      | 200600000         |
| 13       | 7.2    | 237283207      | 301700000         |


#### Find the domestic and international sales for each movie

```
SELECT Title, Domestic_sales, International_sales FROM movies
INNER JOIN boxoffice ON id = Movie_id;
```

#### Show the sales numbers for each movie that did better internationally rather than domestically

```
SELECT Title, Domestic_sales, International_sales FROM movies
INNER JOIN boxoffice ON id = Movie_id WHERE International_sales > Domestic_sales;
```

#### List all the movies by their ratings in descending order

```
SELECT Title, Domestic_sales, International_sales FROM movies
INNER JOIN boxoffice ON id = Movie_id WHERE International_sales > Domestic_sales;
```

#### List all the movies by their ratings in descending order

```
SELECT Title, Rating FROM movies
INNER JOIN boxoffice ON id = Movie_id ORDER BY Rating DESC;
```

## Ejercicio 7

### Tablas

| building_name | capacity |
|---------------|---------|
| 1e            | 24      |
| 1w            | 32      |
| 2e            | 16      |
| 2w            | 20      |

| role     | name        | building | years_employed |
|----------|------------|----------|----------------|
| Engineer | Becky A.   | 1e       | 4              |
| Engineer | Dan B.     | 1e       | 2              |
| Engineer | Sharon F.  | 1e       | 6              |
| Engineer | Dan M.     | 1e       | 4              |
| Engineer | Malcom S.  | 1e       | 1              |
| Artist   | Tylar S.   | 2w       | 2              |
| Artist   | Sherman D. | 2w       | 8              |
| Artist   | Jakob J.   | 2w       | 6              |
| Artist   | Lillia A.  | 2w       | 7              |
| Artist   | Brandon J. | 2w       | 7              |
| Manager  | Scott K.   | 1e       | 9              |
| Manager  | Shirlee M. | 1e       | 3              |
| Manager  | Daria O.   | 2w       | 6              |

#### Find the list of all buildings that have employees 

```
SELECT DISTINCT Building FROM employees;
```

#### Find the list of all buildings and their capacity 

```
SELECT * FROM Buildings;
```

#### List all buildings and the distinct employee roles in each building (including empty buildings) 

```
SELECT DISTINCT Building_name, Role FROM Buildings
LEFT JOIN Employees ON Building_name = Building ;
```

## Ejercicio 8

### Tablas 

| building_name | capacity |
|---------------|---------|
| 1e            | 24      |
| 1w            | 32      |
| 2e            | 16      |
| 2w            | 20      |


| role     | name        | building | years_employed |
|----------|------------|----------|----------------|
| Engineer | Becky A.   | 1e       | 4              |
| Engineer | Dan B.     | 1e       | 2              |
| Engineer | Sharon F.  | 1e       | 6              |
| Engineer | Dan M.     | 1e       | 4              |
| Engineer | Malcom S.  | 1e       | 1              |
| Artist   | Tylar S.   | 2w       | 2              |
| Artist   | Sherman D. | 2w       | 8              |
| Artist   | Jakob J.   | 2w       | 6              |
| Artist   | Lillia A.  | 2w       | 7              |


#### Find the name and role of all employees who have not been assigned to a building

```
SELECT Name, Role FROM employees WHERE Building IS NULL;
```

#### Find the names of the buildings that hold no employees

```
SELECT building_name FROM buildings LEFT JOIN employees ON Building_name = Building WHERE name IS NULL;
```