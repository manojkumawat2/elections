CREATE TABLE `constituencies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `state_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `states_ibfk_1` (`state_id`),
  CONSTRAINT `states_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=528 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci