-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 24, 2020 at 10:18 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku-flashback`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movies_id` int(11) NOT NULL AUTO_INCREMENT,
  `movies_title` varchar(300) NOT NULL,
  `cover` varchar(300) NOT NULL,
  `year` int(11) NOT NULL,
  `movies_storyline` text NOT NULL,
  `isadult` varchar(300) NOT NULL,
  `movies_runtime` varchar(300) NOT NULL,
  `movies_trailer` varchar(300) NOT NULL,
  `movies_genre` varchar(300) NOT NULL,
  `movies_rating` varchar(300) NOT NULL,
  PRIMARY KEY (`movies_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_title`, `cover`, `year`, `movies_storyline`, `isadult`, `movies_runtime`, `movies_trailer`, `movies_genre`, `movies_rating`) VALUES
(1, 'Cinderella', 'cinderella.png', 1950, 'When Cinderella\'s cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from her Fairy Godmother.', '0', '1h 14min', 'cinderella.mp4', 'Family, Fantasy', 'G'),
(2, 'Sound of Music', 'sound-of-music.png', 1965, 'A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.', '0', '2h 52min', 'sound-of-music.mp4', 'Family', 'G'),
(3, 'Willy Wonka & the Chocolate Factory', 'willy-wonka.png', 1971, 'A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka\'s mysterious chocolate factory.', '0', '1h 40min', 'willy-wonka.mp4', 'Family, Fantasy', 'G'),
(4, 'The Goonies', 'goonies-f80.png', 1985, 'A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate\'s long-lost treasure.', '0', '1h 54min', 'goonies.mp4', 'Family, Adventure', 'PG'),
(5, 'Home Alone', 'home-alone.png', 1990, 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.', '0', '1h 43min', 'home-alone.mp4', 'Family, Comedy', 'PG'),
(6, 'Roman Holiday', 'roman-holiday-r50.png', 1953, 'A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.', '1', '1h 58min', 'roman-holiday.mp4', 'Comedy, Romance', 'Not Rated'),
(7, 'Breakfast at Tiffany\'s', 'tiffanys-r60.png', 1961, 'A young New York socialite becomes interested in a young man who has moved into her apartment building, but her past threatens to get in the way.', '1', '1h 55min', 'tiffanys.mp4', 'Comedy, Drama, Romance', 'Not Rated'),
(8, 'Grease', 'grease-r70.png', 1978, 'Good girl Sandy Olsson (Olivia Newton-John) and greaser Danny Zuko (John Travolta) fell in love over the summer. When they unexpectedly discover they\'re now in the same high school, will they be able to rekindle their romance?', '1', '1h 50min', 'grease.mp4', 'Musical, Romance', 'PG-13'),
(9, 'The Princess Bride', 'princess-bride.png', 1987, 'While home sick in bed, a young boy\'s grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.', '1', '1h 38min', 'princess-bride.mp4', 'Adventure, Family, Fantasy', 'PG'),
(10, 'Titanic', 'titanic-r90.png', 1997, 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', '1', '3h 14min', 'titanic.mp4', 'Drama, Romance', 'PG-13'),
(11, 'Rocky Mountain', 'rocky-mountain-a50.png', 1950, 'In California during the Civil War, a Confederate patrol and a Union troop must set their differences aside in order to survive a Sioux attack.', '1', '1h 23min', 'rocky-mountain-trailer.mp4', 'Action, Adventure, Western', 'Passed'),
(12, 'The Pink Panther', 'pink-panther-a60.png', 1963, 'The bumbling Inspector Clouseau travels to Rome to catch a notorious jewel thief known as \"The Phantom\" before he conducts his most daring heist yet: a princess\' priceless diamond with one slight imperfection, known as \"The Pink Panther\".', '1', '1h 55min', 'pink-panther.mp4', 'Comedy, Crime, Romance', 'Not Rated'),
(13, 'Mad Max', 'madmax-a70.png', 1979, 'In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.', '1', '1h 28min ', 'mad-max.mp4', 'Action, Adventure, Sci-Fi', 'R'),
(14, 'Die Hard', 'diehard-a80.png', 1988, 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.', '1', '2h 12min', 'die-hard.mp4', 'Action, Thriller', 'R'),
(15, 'Terminator 2: Judgment Day', 'terminator2-a90.png', 1991, 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.', '1', '2h 17min', 'terminator2.mp4', 'Action, Sci-Fi', 'R'),
(16, 'Rebel Without a Cause', 'rebel-without-cause-d50.png', 1955, 'A rebellious young man with a troubled past comes to a new town, finding friends and enemies.', '1', '1h 51min', 'rebel-without-cause.mp4', 'Drama', 'PG-13'),
(17, 'Lawrence of Arabia', 'lawrence-arabia-d60.png', 1962, 'The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.', '1', '3h 48min', 'lawrence-of-arabia.mp4', 'Adventure, Biography, Drama', 'Approved'),
(18, 'The Godfather', 'godfather-d70.png', 1972, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', '1', '2h 55min', 'thegodfather.mp4', 'Crime, Drama', 'R'),
(19, 'The Breakfast Club', 'breakfast-club-d80.png', 1985, 'Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.', '1', '1h 37min', 'breakfast-club.mp4', 'Comedy, Drama', 'R'),
(20, 'Clueless', 'clueless-d90.png', 1995, 'A rich high school student tries to boost a new pupil\'s popularity, but reckons without affairs of the heart getting in the way.', '1', '1h 37min ', 'clueless.mp4', 'Comedy, Romance', 'PG-13'),
(21, 'Creature from the Black Lagoon', 'cfbl-h50.png', 1954, 'A strange prehistoric beast lurks in the depths of the Amazonian jungle. A group of scientists try to capture the animal and bring it back to civilization for study.', '1', '1h 19min', 'cfbl-1954.mp4', 'Horror, Sci-Fi', 'G'),
(22, 'Psycho', 'psycho-h60.png', 1960, 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.', '1', '1h 49min', 'psycho.mp4', 'Horror, Mystery, Thriller', 'R'),
(23, 'The Texas Chain Saw Massacre', 'texas-chainsaw-h70.png', 1974, 'Two siblings and three of their friends en route to visit their grandfather\'s grave in Texas end up falling victim to a family of cannibalistic psychopaths and must survive the terrors of Leatherface and his family.', '1', '1h 23min', 'texas-chainsaw-massacre.mp4', 'Horror', 'R'),
(24, 'The Shining', 'shining-h80.png', 1980, 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.', '1', '2h 26min', 'shining.mp4', 'Drama, Horror', 'R'),
(25, 'The Silence of the Lambs', 'silence-of-lambs-h90.png', 1991, 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', '1', '1h 58min', 'silence-lambs.mp4', 'Crime, Drama, Thriller', 'R');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

DROP TABLE IF EXISTS `tbl_music`;
CREATE TABLE IF NOT EXISTS `tbl_music` (
  `music_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_title` varchar(300) NOT NULL,
  `cover` varchar(300) NOT NULL,
  `year` varchar(300) NOT NULL,
  `isadult` varchar(300) NOT NULL,
  `music_audio` varchar(300) NOT NULL,
  PRIMARY KEY (`music_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_title`, `cover`, `year`, `isadult`, `music_audio`) VALUES
(1, 'Don\'t Be Cruel\r\nElvis Presley', 'elvis-cover-50s.png', '1956', '0', 'dont-be-cruel.mp3'),
(2, 'Walkin\' After Midnight\r\nPatsy Cline', 'patsy-cline-cover-50s.png', '1957', '0', 'walkin-after-midnight.mp3'),
(3, 'I\'m A Believer\r\nThe Monkees', 'monkees-cover-60s.png', '1967', '0', 'im-a-believer.mp3'),
(4, 'Dream A Little Dream Of Me\r\nElla & Louis', 'ella-louis-cover-60s.png', '1956', '0', 'dream-a-little-dream.mp3'),
(5, 'I Wanna Dance With Somebody\r\nWhitney Houston', 'whitney-cover-80s.png', '1987', '0', 'i-wanna-dance-with-somebody.mp3'),
(6, 'Smooth Criminal\r\nMichael Jackson', 'michael-jackson-cover-80s.png', '1988', '0', 'smoothcriminal.mp3'),
(7, 'Baby One More Time\r\nBritney Spears', 'britney-cover-90s.png', '1998', '0', 'baby-one-more-time.mp3'),
(8, 'Stayin\' Alive\r\nBeeGees', 'beegees-cover-70s.png', '1977', '0', 'stayin-alive.mp3'),
(9, 'Dancing Queen\r\nABBA', 'abba-cover-70s.png', '1975', '0', 'dancing-queen.mp3'),
(10, 'Blue\r\nEiffel 65', 'eiffel65-cover-90s.png', '1998', '0', 'im-blue.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

DROP TABLE IF EXISTS `tbl_tv`;
CREATE TABLE IF NOT EXISTS `tbl_tv` (
  `tv_id` int(11) NOT NULL AUTO_INCREMENT,
  `tv_title` varchar(300) NOT NULL,
  `cover` varchar(300) NOT NULL,
  `year` varchar(300) NOT NULL,
  `tv_storyline` text NOT NULL,
  `isadult` varchar(300) NOT NULL,
  `tv_runtime` varchar(300) NOT NULL,
  `tv_trailer` varchar(300) NOT NULL,
  `tv_genre` varchar(300) NOT NULL,
  `tv_rating` varchar(300) NOT NULL,
  PRIMARY KEY (`tv_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`tv_id`, `tv_title`, `cover`, `year`, `tv_storyline`, `isadult`, `tv_runtime`, `tv_trailer`, `tv_genre`, `tv_rating`) VALUES
(1, 'Hey Arnold!', 'hey-arnold-k90.png', '1996', 'The everyday life of Arnold (Lane Toran, Phillip Van Dyke, Spencer Klein, and Alex D. Linz), a fourth-grader in a nameless city that resembles Brooklyn, New York, who lives in a multi-racial boarding house with his grandparents and a motley assortment of friends and neighbors.', '0', '15min', 'hey-arnold.mp4', 'Animation, Comedy, Drama', 'TV-Y7'),
(2, 'Full House', 'full-house-f80.png', '1987', 'A widowed broadcaster raises his three daughters with assistance from his rock\'n\'roll brother-in-law and his madcap best friend.', '0', '22min', 'full-house.mp4', 'Comedy, Drama, Family', 'TV-G'),
(3, 'The Flintstones', 'flinstones-cartoon-k60s.png', '1960', 'The misadventures of two modern-day Stone Age families, the Flintstones and the Rubbles.', '0', '30min', 'flinstones-cartoon.mp4', 'Animation, Adventure, Comedy', 'TV-G'),
(4, 'Scooby Doo, Where Are You!', 'scooby-doo-k60s.png', '1969', 'A group of teenage friends and their Great Dane (Scooby-Doo) travel in a bright green van solving strange and hilarious mysteries, while returning from or going to a regular teenage function.', '0', '22min', 'scooby-doo.mp4', 'Animation, Adventure, Comedy', 'TV-G'),
(5, 'Tom & Jerry', 'tom-jerry-k70s.png', '1970', 'The misadventures of a cat and a mouse', '0', '22min', 'tomandjerry.mp4', 'Animation', 'TV-Y7'),
(6, 'F.R.I.E.N.D.S', 'friends-c90.png', '1994', 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', '1', '22min', 'friends.mp4', 'Comedy, Romance', 'TV-14'),
(7, 'The Fresh Prince of Bel-Air', 'freshprince-f90.png', '1994', 'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', '1', '22min', 'fresh-prince.mp4', 'Comedy', 'TV-PG'),
(8, 'The Golden Girls', 'golden-girls-c80.png', '1985', 'Four previously married women live together in Miami, sharing their various experiences together and enjoying themselves despite hard times.', '1', '30min', 'golden-girls.mp4', 'Comedy, Drama', 'TV-PG'),
(9, 'Happy Days', 'happy-days-70s.png', '1974', 'The Cunningham family live through the 1950s with help and guidance from the lovable and almost superhuman greaser, Fonzie.', '1', '30min', 'happy-days.mp4', 'Comedy, Family, Music', 'TV-G'),
(10, 'Bewitched', 'bewitched-60s.png', '1964', 'A witch married to an ordinary man cannot resist using her magic powers to solve the problems her family faces.', '1', '25min', 'bewitched.mp4', 'Comedy, Family, Fantasy', 'TV-G'),
(11, 'I Love Lucy', 'i-love-lucy-50s.png', '1951', 'A daffy woman constantly strives to become a star along with her bandleader husband and gets herself in the strangest situations.', '1', '30min', 'i-love-lucy.mp4', 'Comedy, Family', 'TV-G'),
(12, 'Father Knows Best', 'fatherknowsbest-50s.png', '1954', 'The popular radio show comes to life in this hit sitcom about a wise family man, Jim Anderson, his common-sense wife Margaret and their children Betty, Bud and Kathy.', '1', '30min', 'father-knows-best-trailer.mp4', 'Comedy, Family', 'TV-G');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_avatar` varchar(20) NOT NULL,
  `user_permissions` int(11) NOT NULL,
  `user_admin` int(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(3, 'Trevor', 'user1', 'password', 'me@you.com', '2020-03-09 15:48:21', '::1', 'olaf', 5, 1),
(4, 'Kate', 'user2', 'password', 'me@ou.com', '2020-03-09 15:49:04', 'no', 'null', 5, 1),
(5, 'Madelaine', 'user3', 'password', 'me@you.com', '2020-03-09 15:49:39', 'no', 'null', 3, 0),
(6, 'Isabelle', 'user4', 'password', 'me@you.com', '2020-03-09 15:50:13', 'no', 'null', 2, 0),
(7, 'Serena', 'user5', 'password', 'me@you.com', '2020-03-09 15:50:48', '::1', 'null', 2, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
