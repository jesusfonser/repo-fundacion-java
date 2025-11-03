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

