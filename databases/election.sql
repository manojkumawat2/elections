-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 29, 2022 at 01:33 PM
-- Server version: 8.0.28
-- PHP Version: 7.3.33-1+ubuntu20.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `election`
--

-- --------------------------------------------------------

--
-- Table structure for table `constituencies`
--

CREATE TABLE `constituencies` (
  `id` int NOT NULL,
  `name` varchar(256) NOT NULL,
  `state_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `constituencies`
--

INSERT INTO `constituencies` (`id`, `name`, `state_id`) VALUES
(1, 'chandigarh', 6),
(2, 'lakshadweep', 20),
(3, 'puducherry', 28),
(4, 'aruku', 2),
(5, 'srikakulam', 2),
(6, 'vizianagaram', 2),
(7, 'visakhapatnam', 2),
(8, 'anakapalli', 2),
(9, 'kakinada', 2),
(10, 'amalapuram', 2),
(11, 'rajahmundry', 2),
(12, 'narsapuram', 2),
(13, 'eluru', 2),
(14, 'machilipatnam', 2),
(15, 'vijayawada', 2),
(16, 'guntur', 2),
(17, 'narasaraopet', 2),
(18, 'bapatla', 2),
(19, 'ongole', 2),
(20, 'nandyal', 2),
(21, 'kurnool', 2),
(22, 'anantapur', 2),
(23, 'hindupur', 2),
(24, 'kadapa', 2),
(25, 'nellore', 2),
(26, 'tirupati', 2),
(27, 'rajampet', 2),
(28, 'chittoor', 2),
(29, 'arunachal west', 3),
(30, 'arunachal east', 3),
(31, 'karimganj', 4),
(32, 'silchar', 4),
(33, 'autonomous district', 4),
(34, 'dhubri', 4),
(35, 'kokrajhar', 4),
(36, 'barpeta', 4),
(37, 'gauhati', 4),
(38, 'mangaldoi', 4),
(39, 'tezpur', 4),
(40, 'nowgong', 4),
(41, 'kaliabor', 4),
(42, 'jorhat', 4),
(43, 'dibrugarh', 4),
(44, 'lakhimpur', 4),
(45, 'valmiki nagar', 5),
(46, 'paschim champaran', 5),
(47, 'purvi champaran', 5),
(48, 'sheohar', 5),
(49, 'sitamarhi', 5),
(50, 'madhubani', 5),
(51, 'jhanjharpur', 5),
(52, 'supaul', 5),
(53, 'araria', 5),
(54, 'kishanganj', 5),
(55, 'katihar', 5),
(56, 'purnia', 5),
(57, 'madhepura', 5),
(58, 'darbhanga', 5),
(59, 'muzaffarpur', 5),
(60, 'vaishali', 5),
(61, 'gopalganj (sc)', 5),
(62, 'siwan', 5),
(63, 'maharajganj', 5),
(64, 'saran', 5),
(65, 'hajipur (sc)', 5),
(66, 'ujiarpur', 5),
(67, 'samastipur (sc)', 5),
(68, 'begusarai', 5),
(69, 'khagaria', 5),
(70, 'bhagalpur', 5),
(71, 'banka', 5),
(72, 'munger', 5),
(73, 'nalanda', 5),
(74, 'patna sahib', 5),
(75, 'pataliputra', 5),
(76, 'arrah', 5),
(77, 'buxar', 5),
(78, 'sasaram (sc)', 5),
(79, 'karakat', 5),
(80, 'jahanabad', 5),
(81, 'aurangabad', 5),
(82, 'gaya (sc)', 5),
(83, 'nawada', 5),
(84, 'jamui (sc)', 5),
(85, 'north goa', 11),
(86, 'south goa', 11),
(87, 'kachchh', 12),
(88, 'banaskantha', 12),
(89, 'patan', 12),
(90, 'mahesana', 12),
(91, 'sabarkantha', 12),
(92, 'gandhinagar', 12),
(93, 'ahmedabad east', 12),
(94, 'ahmedabad west', 12),
(95, 'surendranagar', 12),
(96, 'rajkot', 12),
(97, 'porbandar', 12),
(98, 'jamnagar', 12),
(99, 'junagadh', 12),
(100, 'amreli', 12),
(101, 'bhavnagar', 12),
(102, 'anand', 12),
(103, 'kheda', 12),
(104, 'panchmahal', 12),
(105, 'dahod', 12),
(106, 'vadodara', 12),
(107, 'chhota udaipur', 12),
(108, 'bharuch', 12),
(109, 'bardoli', 12),
(110, 'surat', 12),
(111, 'navsari', 12),
(112, 'valsad', 12),
(113, 'ambala', 13),
(114, 'kurukshetra', 13),
(115, 'sirsa', 13),
(116, 'hisar', 13),
(117, 'karnal', 13),
(118, 'sonipat', 13),
(119, 'rohtak', 13),
(120, 'bhiwani', 13),
(121, 'gurgaon', 13),
(122, 'faridabad', 13),
(123, 'kangra', 14),
(124, 'mandi', 14),
(125, 'hamirpur', 14),
(126, 'shimla', 14),
(127, 'chikkodi', 17),
(128, 'belgaum', 17),
(129, 'bagalkot', 17),
(130, 'bijapur', 17),
(131, 'gulbarga', 17),
(132, 'raichur', 17),
(133, 'bidar', 17),
(134, 'koppal', 17),
(135, 'bellary', 17),
(136, 'haveri', 17),
(137, 'dharwad', 17),
(138, 'uttara kannada', 17),
(139, 'davanagere', 17),
(140, 'shimoga', 17),
(141, 'udupi chikmagalur', 17),
(142, 'hassan', 17),
(143, 'dakshina kannada', 17),
(144, 'chitradurga', 17),
(145, 'tumkur', 17),
(146, 'mandya', 17),
(147, 'mysore', 17),
(148, 'chamarajanagar', 17),
(149, 'bangalore rural', 17),
(150, 'bangalore north', 17),
(151, 'bangalore central', 17),
(152, 'bangalore south', 17),
(153, 'chikkballapur', 17),
(154, 'kolar', 17),
(155, 'kasaragod', 18),
(156, 'kannur', 18),
(157, 'vadakara', 18),
(158, 'wayanad', 18),
(159, 'kozhikode', 18),
(160, 'malappuram', 18),
(161, 'ponnani', 18),
(162, 'palakkad', 18),
(163, 'alathur', 18),
(164, 'thrissur', 18),
(165, 'chalakudy', 18),
(166, 'ernakulam', 18),
(167, 'idukki', 18),
(168, 'kottayam', 18),
(169, 'alappuzha', 18),
(170, 'mavelikkara', 18),
(171, 'pathanamthitta', 18),
(172, 'kollam', 18),
(173, 'attingal', 18),
(174, 'thiruvananthapuram', 18),
(175, 'morena', 21),
(176, 'bhind', 21),
(177, 'gwalior', 21),
(178, 'guna', 21),
(179, 'sagar', 21),
(180, 'tikamgarh', 21),
(181, 'damoh', 21),
(182, 'khajuraho', 21),
(183, 'satna', 21),
(184, 'rewa', 21),
(185, 'sidhi', 21),
(186, 'shahdol', 21),
(187, 'jabalpur', 21),
(188, 'mandla', 21),
(189, 'balaghat', 21),
(190, 'chhindwara', 21),
(191, 'hoshangabad', 21),
(192, 'vidisha', 21),
(193, 'bhopal', 21),
(194, 'rajgarh', 21),
(195, 'dewas', 21),
(196, 'ujjain', 21),
(197, 'mandsour', 21),
(198, 'ratlam', 21),
(199, 'dhar', 21),
(200, 'indore', 21),
(201, 'khargone', 21),
(202, 'khandwa', 21),
(203, 'betul', 21),
(204, 'nandurbar', 22),
(205, 'dhule', 22),
(206, 'jalgaon', 22),
(207, 'raver', 22),
(208, 'buldhana', 22),
(209, 'akola', 22),
(210, 'amravati', 22),
(211, 'wardha', 22),
(212, 'ramtek', 22),
(213, 'nagpur', 22),
(214, 'bhandara', 22),
(215, 'gadchiroli', 22),
(216, 'chandrapur', 22),
(217, 'yavatmal', 22),
(218, 'hingoli', 22),
(219, 'nanded', 22),
(220, 'parbhani', 22),
(221, 'jalna', 22),
(222, 'aurangabad', 22),
(223, 'dindori', 22),
(224, 'nashik', 22),
(225, 'palghar', 22),
(226, 'bhiwandi', 22),
(227, 'kalyan', 22),
(228, 'thane', 22),
(229, 'mumbai north', 22),
(230, 'mumbai north west', 22),
(231, 'mumbai north east', 22),
(232, 'mumbai north central', 22),
(233, 'mumbai south central', 22),
(234, 'mumbai   south', 22),
(235, 'raigad', 22),
(236, 'maval', 22),
(237, 'pune', 22),
(238, 'baramati', 22),
(239, 'shirur', 22),
(240, 'ahmadnagar', 22),
(241, 'shirdi', 22),
(242, 'beed', 22),
(243, 'osmanabad', 22),
(244, 'latur', 22),
(245, 'solapur', 22),
(246, 'madha', 22),
(247, 'sangli', 22),
(248, 'satara', 22),
(249, 'ratnagiri', 22),
(250, 'kolhapur', 22),
(251, 'hatkanangle', 22),
(252, 'inner manipur', 23),
(253, 'outer manipur', 23),
(254, 'shillong', 24),
(255, 'tura', 24),
(256, 'mizoram', 25),
(257, 'nagaland', 26),
(258, 'bargarh', 27),
(259, 'sundargarh', 27),
(260, 'sambalpur', 27),
(261, 'keonjhar', 27),
(262, 'mayurbhanj', 27),
(263, 'balasore', 27),
(264, 'bhadrak', 27),
(265, 'jajpur', 27),
(266, 'dhenkanal', 27),
(267, 'bolangir', 27),
(268, 'kalahandi', 27),
(269, 'nabarangpur', 27),
(270, 'kandhamal', 27),
(271, 'cuttack', 27),
(272, 'kendrapara', 27),
(273, 'jagatsinghpur', 27),
(274, 'puri', 27),
(275, 'bhubaneswar', 27),
(276, 'aska', 27),
(277, 'berhampur', 27),
(278, 'koraput', 27),
(279, 'gurdaspur', 29),
(280, 'amritsar', 29),
(281, 'khadoor sahib', 29),
(282, 'jalandhar', 29),
(283, 'hoshiarpur', 29),
(284, 'anandpur sahib', 29),
(285, 'ludhiana', 29),
(286, 'fatehgarh sahib', 29),
(287, 'faridkot', 29),
(288, 'firozpur', 29),
(289, 'bathinda', 29),
(290, 'sangrur', 29),
(291, 'patiala', 29),
(292, 'ganganagar', 30),
(293, 'bikaner (sc)', 30),
(294, 'churu', 30),
(295, 'jhunjhunu', 30),
(296, 'sikar', 30),
(297, 'jaipur rural', 30),
(298, 'jaipur', 30),
(299, 'alwar', 30),
(300, 'bharatpur', 30),
(301, 'karauli', 30),
(302, 'dausa', 30),
(303, 'tonk', 30),
(304, 'ajmer', 30),
(305, 'nagaur', 30),
(306, 'pali', 30),
(307, 'jodhpur', 30),
(308, 'barmer', 30),
(309, 'jalore', 30),
(310, 'udaipur', 30),
(311, 'banswara', 30),
(312, 'chittorgarh', 30),
(313, 'rajsamand', 30),
(314, 'bhilwara', 30),
(315, 'kota', 30),
(316, 'jhalawar', 30),
(317, 'sikkim', 31),
(318, 'thiruvallur', 32),
(319, 'chennai north', 32),
(320, 'chennai south', 32),
(321, 'chennai central', 32),
(322, 'sriperumbudur', 32),
(323, 'kancheepuram', 32),
(324, 'arakkonam', 32),
(325, 'vellore', 32),
(326, 'krishnagiri', 32),
(327, 'dharmapuri', 32),
(328, 'tiruvannamalai', 32),
(329, 'arani', 32),
(330, 'viluppuram', 32),
(331, 'kallakurichi', 32),
(332, 'salem', 32),
(333, 'namakkal', 32),
(334, 'erode', 32),
(335, 'tiruppur', 32),
(336, 'nilgiris', 32),
(337, 'coimbatore', 32),
(338, 'pollachi', 32),
(339, 'dindigul', 32),
(340, 'karur', 32),
(341, 'tiruchirappalli', 32),
(342, 'perambalur', 32),
(343, 'cuddalore', 32),
(344, 'chidambaram', 32),
(345, 'mayiladuthurai', 32),
(346, 'nagapattinam', 32),
(347, 'thanjavur', 32),
(348, 'sivaganga', 32),
(349, 'madurai', 32),
(350, 'theni', 32),
(351, 'virudhunagar', 32),
(352, 'ramanathapuram', 32),
(353, 'thoothukkudi', 32),
(354, 'tenkasi', 32),
(355, 'tirunelveli', 32),
(356, 'kanniyakumari', 32),
(357, 'tripura west', 34),
(358, 'tripura east', 34),
(359, 'saharanpur', 35),
(360, 'kairana', 35),
(361, 'muzaffarnagar', 35),
(362, 'bijnor', 35),
(363, 'nagina', 35),
(364, 'moradabad', 35),
(365, 'rampur', 35),
(366, 'sambhal', 35),
(367, 'amroha', 35),
(368, 'meerut', 35),
(369, 'baghpat', 35),
(370, 'ghaziabad', 35),
(371, 'gautam buddha nagar', 35),
(372, 'bulandshahr', 35),
(373, 'aligarh', 35),
(374, 'hathras', 35),
(375, 'mathura', 35),
(376, 'agra', 35),
(377, 'fatehpur sikri', 35),
(378, 'firozabad', 35),
(379, 'mainpuri', 35),
(380, 'etah', 35),
(381, 'badaun', 35),
(382, 'aonla', 35),
(383, 'bareilly', 35),
(384, 'pilibhit', 35),
(385, 'shahjahanpur', 35),
(386, 'kheri', 35),
(387, 'dhaurahra', 35),
(388, 'sitapur', 35),
(389, 'hardoi', 35),
(390, 'misrikh', 35),
(391, 'unnao', 35),
(392, 'mohanlalganj', 35),
(393, 'lucknow', 35),
(394, 'rae bareli', 35),
(395, 'amethi', 35),
(396, 'sultanpur', 35),
(397, 'pratapgarh', 35),
(398, 'farrukhabad', 35),
(399, 'etawah', 35),
(400, 'kannauj', 35),
(401, 'kanpur', 35),
(402, 'akbarpur', 35),
(403, 'jalaun', 35),
(404, 'jhansi', 35),
(405, 'hamirpur', 35),
(406, 'banda', 35),
(407, 'fatehpur', 35),
(408, 'kaushambi', 35),
(409, 'phulpur', 35),
(410, 'allahabad', 35),
(411, 'barabanki', 35),
(412, 'faizabad', 35),
(413, 'ambedkar nagar', 35),
(414, 'bahraich', 35),
(415, 'kaiserganj', 35),
(416, 'shrawasti', 35),
(417, 'gonda', 35),
(418, 'domariyaganj', 35),
(419, 'basti', 35),
(420, 'sant kabir nagar', 35),
(421, 'maharajganj', 35),
(422, 'gorakhpur', 35),
(423, 'kushi nagar', 35),
(424, 'deoria', 35),
(425, 'bansgaon', 35),
(426, 'lalganj', 35),
(427, 'azamgarh', 35),
(428, 'ghosi', 35),
(429, 'salempur', 35),
(430, 'ballia', 35),
(431, 'jaunpur', 35),
(432, 'machhlishahr', 35),
(433, 'ghazipur', 35),
(434, 'chandauli', 35),
(435, 'varanasi', 35),
(436, 'bhadohi', 35),
(437, 'mirzapur', 35),
(438, 'robertsganj', 35),
(439, 'cooch behar', 37),
(440, 'alipurduars', 37),
(441, 'jalpaiguri', 37),
(442, 'darjeeling', 37),
(443, 'raiganj', 37),
(444, 'balurghat', 37),
(445, 'maldaha uttar', 37),
(446, 'maldaha dakshin', 37),
(447, 'jangipur', 37),
(448, 'baharampur', 37),
(449, 'murshidabad', 37),
(450, 'krishnanagar', 37),
(451, 'ranaghat', 37),
(452, 'bangaon', 37),
(453, 'barrackpore', 37),
(454, 'dum dum', 37),
(455, 'barasat', 37),
(456, 'basirhat', 37),
(457, 'joynagar', 37),
(458, 'mathurapur', 37),
(459, 'diamond harbour', 37),
(460, 'jadavpur', 37),
(461, 'kolkata dakshin', 37),
(462, 'kolkata uttar', 37),
(463, 'howrah', 37),
(464, 'uluberia', 37),
(465, 'srerampur', 37),
(466, 'hooghly', 37),
(467, 'arambagh', 37),
(468, 'tamluk', 37),
(469, 'kanthi', 37),
(470, 'ghatal', 37),
(471, 'jhargram', 37),
(472, 'medinipur', 37),
(473, 'purulia', 37),
(474, 'bankura', 37),
(475, 'bishnupur', 37),
(476, 'bardhaman purba', 37),
(477, 'bardhaman durgapur', 37),
(478, 'asansol', 37),
(479, 'bolpur', 37),
(480, 'birbhum', 37),
(481, 'sarguja', 7),
(482, 'raigarh', 7),
(483, 'janjgir', 7),
(484, 'korba', 7),
(485, 'bilaspur', 7),
(486, 'rajnandgaon', 7),
(487, 'durg', 7),
(488, 'raipur', 7),
(489, 'mahasamund', 7),
(490, 'bastar', 7),
(491, 'kanker', 7),
(492, 'rajmahal', 16),
(493, 'dumka', 16),
(494, 'godda', 16),
(495, 'chatra', 16),
(496, 'kodarma', 16),
(497, 'giridih', 16),
(498, 'dhanbad', 16),
(499, 'ranchi', 16),
(500, 'jamshedpur', 16),
(501, 'singhbhum', 16),
(502, 'khunti', 16),
(503, 'lohardaga', 16),
(504, 'palamau', 16),
(505, 'hazaribagh', 16),
(506, 'tehri garhwal', 36),
(507, 'garhwal', 36),
(508, 'almora', 36),
(509, 'nainital', 36),
(510, 'hardwar', 36),
(511, 'adilabad', 33),
(512, 'peddapalle', 33),
(513, 'karimnagar', 33),
(514, 'nizamabad', 33),
(515, 'zahirabad', 33),
(516, 'medak', 33),
(517, 'malkajgiri', 33),
(518, 'secundrabad', 33),
(519, 'hyderabad', 33),
(520, 'chevella', 33),
(521, 'mahbubnagar', 33),
(522, 'nagarkurnool', 33),
(523, 'nalgonda', 33),
(524, 'bhongir', 33),
(525, 'warangal', 33),
(526, 'mahabubabad', 33),
(527, 'khammam', 33);

-- --------------------------------------------------------

--
-- Table structure for table `elections`
--

CREATE TABLE `elections` (
  `id` int NOT NULL,
  `title` varchar(256) NOT NULL,
  `constituency_id` int NOT NULL,
  `description` text NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `elections`
--

INSERT INTO `elections` (`id`, `title`, `constituency_id`, `description`, `start_date`, `end_date`) VALUES
(6, 'This is the title', 1, '<p>asdfadfsadfadfadffadfadfadsff</p>', '2022-05-17', '2022-05-29'),
(7, 'akljalkdsjfljka', 1, '<p>kjldkafjsdlfkjalkdsfjlka</p>', '2022-05-19', '2022-05-31'),
(8, 'jksdkahfkaskdlf', 1, '<p>kjsdlakjjfklasdjdflkjajdfslk</p>', '2022-05-19', '2022-05-31');

-- --------------------------------------------------------

--
-- Table structure for table `election_candidates`
--

CREATE TABLE `election_candidates` (
  `id` int NOT NULL,
  `election_id` int NOT NULL,
  `candidate_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `election_candidates`
--

INSERT INTO `election_candidates` (`id`, `election_id`, `candidate_id`) VALUES
(6, 6, 9),
(7, 6, 12),
(8, 7, 9),
(9, 7, 11),
(10, 7, 12),
(11, 8, 9),
(12, 8, 11),
(13, 8, 12);

-- --------------------------------------------------------

--
-- Table structure for table `nominated_candidates`
--

CREATE TABLE `nominated_candidates` (
  `id` int NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `mobile_number` varchar(20) NOT NULL,
  `constituency_id` int NOT NULL,
  `party_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nominated_candidates`
--

INSERT INTO `nominated_candidates` (`id`, `name`, `email`, `mobile_number`, `constituency_id`, `party_name`) VALUES
(9, 'Rahul Kumawat', 'dfadsfaa@gmail.com', '9636018846', 1, 'Congress'),
(10, 'Manoj Kumawat', 'manoj@internshala.com', '9636018846', 19, 'Congress'),
(11, 'Jay Prakash', 'jay@gmail.com', '7841253625', 1, 'BJP'),
(12, 'John', 'john@gmail.com', '7575757575', 1, 'AAP');

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` int NOT NULL,
  `email` varchar(256) NOT NULL,
  `otp` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `status` enum('active','expired') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `email`, `otp`, `type`, `status`) VALUES
(8, 'mkkumawat3333@gmail.com', 603482, 'mail', 'expired'),
(9, 'mkkumawat3333@gmail.com', 400960, 'mail', 'expired'),
(10, 'mkkumawat3333@gmail.com', 167594, 'mail', 'expired'),
(11, 'mkkumawat3333@gmail.com', 659952, 'mail', 'expired'),
(12, 'mkkumawat3333@gmail.com', 722554, 'mail', 'expired'),
(13, 'mkkumawat3333@gmail.com', 170004, 'mail', 'expired'),
(14, 'mkkumawat3333@gmail.com', 115913, 'mail', 'active'),
(15, 'rahul@gmail.com', 292038, 'mail', 'expired'),
(16, 'rahul@gmail.com', 193153, 'mail', 'active'),
(17, 'temp@gmail.com', 714508, 'mail', 'expired'),
(18, 'temp@gmail.com', 665183, 'mail', 'active'),
(19, 'manoj@gmail.com', 368574, 'mail', 'expired'),
(20, 'manoj@gmail.com', 401632, 'mail', 'active'),
(21, 'kjajkds@gmail.com', 983251, 'mail', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int NOT NULL,
  `name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`) VALUES
(1, 'Andaman and Nicobar Islands'),
(2, 'Andhra Pradesh'),
(3, 'Arunachal Pradesh'),
(4, 'Assam'),
(5, 'Bihar'),
(6, 'Chandigarh'),
(7, 'Chhattisgarh'),
(8, 'Dadra and Nagar Haveli'),
(9, 'Daman and Diu'),
(10, 'Delhi'),
(11, 'Goa'),
(12, 'Gujarat'),
(13, 'Haryana'),
(14, 'Himachal Pradesh'),
(15, 'Jammu and Kashmir'),
(16, 'Jharkhand'),
(17, 'Karnataka'),
(18, 'Kerala'),
(19, 'Ladakh'),
(20, 'Lakshadweep'),
(21, 'Madhya Pradesh'),
(22, 'Maharashtra'),
(23, 'Manipur'),
(24, 'Meghalaya'),
(25, 'Mizoram'),
(26, 'Nagaland'),
(27, 'Odisha'),
(28, 'Puducherry'),
(29, 'Punjab'),
(30, 'Rajasthan'),
(31, 'Sikkim'),
(32, 'Tamil Nadu'),
(33, 'Telangana'),
(34, 'Tripura'),
(35, 'Uttar Pradesh'),
(36, 'Uttarakhand'),
(37, 'West Bengal');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `type` enum('voter','admin') NOT NULL,
  `password` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `type`, `password`) VALUES
(1, 'Manoj Kumawat', 'admin@gmail.com', 'admin', '$2a$10$8qLa.CqM68np4BzQCUE7ceM1igV.l25ygiZpGNFrS.XGGd6dwsrIW'),
(12, 'Manoj Kumawat', 'mkkumawat3333@gmail.com', 'voter', '$2a$10$mwb1CqN3dfZ.6i4D9.eY2e/RngEymd9HiaGnJWzYUTDBwt5C8LG/y'),
(16, 'Manoj Kumawat', 'temp@gmail.com', 'voter', '$2a$10$IxK0q3NCXW1Z8c0k5tNqx.SrzLz9grjqF2c3Pr1Pp2G77jdJuZvOy'),
(17, 'manoj', 'manoj@gmail.com', 'voter', '$2a$10$N8yCQROgFiBfv6xHfsZwSer8XkzKLV6pGgTPpRntIdTlMZO2Uf5La'),
(18, 'Manoj Kumawat', 'kjajkds@gmail.com', 'voter', '$2a$10$2mH7yRWTaGmyPBKp9vNvpuqbp9wnzqxvYXCY3jeyGZ6BeFQutJxfC');

-- --------------------------------------------------------

--
-- Table structure for table `voters`
--

CREATE TABLE `voters` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `mobile_number` varchar(20) NOT NULL,
  `aadhar_number` varchar(100) NOT NULL,
  `constituency_id` int NOT NULL,
  `is_verified` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `voters`
--

INSERT INTO `voters` (`id`, `user_id`, `mobile_number`, `aadhar_number`, `constituency_id`, `is_verified`) VALUES
(1, 16, '7878787878', 'a6765464654', 1, 1),
(2, 17, '7878787878', '546464654564654546', 1, 1),
(3, 18, '9636018846', '784545454545454', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `constituencies`
--
ALTER TABLE `constituencies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `states_ibfk_1` (`state_id`);

--
-- Indexes for table `elections`
--
ALTER TABLE `elections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `election_candidates`
--
ALTER TABLE `election_candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nominated_candidates`
--
ALTER TABLE `nominated_candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voters`
--
ALTER TABLE `voters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `constituencies`
--
ALTER TABLE `constituencies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=528;

--
-- AUTO_INCREMENT for table `elections`
--
ALTER TABLE `elections`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `election_candidates`
--
ALTER TABLE `election_candidates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `nominated_candidates`
--
ALTER TABLE `nominated_candidates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `voters`
--
ALTER TABLE `voters`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `constituencies`
--
ALTER TABLE `constituencies`
  ADD CONSTRAINT `states_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
