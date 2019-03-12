-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 01, 2019 at 10:04 AM
-- Server version: 5.7.24-0ubuntu0.18.04.1
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mpesa`
--

-- --------------------------------------------------------

--
-- Table structure for table `Failed_T`
--

CREATE TABLE `Failed_T` (
  `id` int(10) NOT NULL,
  `ResultCode` int(10) NOT NULL,
  `ResultDesc` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Failed_T`
--

INSERT INTO `Failed_T` (`id`, `ResultCode`, `ResultDesc`, `Date`) VALUES
(1, 2001, '[MpesaCB - ]The initiator information is invalid.', '2019-01-28 05:30:46'),
(2, 1036, '[STK_CB - ]SMSC ACK timeout.', '2019-01-29 18:53:14'),
(3, 1, '[MpesaCB - ]The balance is insufficient for the transaction.', '2019-01-29 18:56:13'),
(4, 2001, '[MpesaCB - ]The initiator information is invalid.', '2019-01-29 19:28:26'),
(5, 1, '[MpesaCB - ]The balance is insufficient for the transaction.', '2019-01-29 19:31:21'),
(6, 1032, '[STK_CB - ]Request cancelled by user', '2019-01-29 19:33:00');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `mpesaCode` varchar(10) NOT NULL,
  `amount` int(5) NOT NULL,
  `sender` varchar(10) NOT NULL,
  `SENDERNAME` varchar(50) NOT NULL,
  `seen` tinyint(1) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`mpesaCode`, `amount`, `sender`, `SENDERNAME`, `seen`, `date`) VALUES
('MPESA001', 1000, '0799012907', 'KIPRONO DENIS', 0, '2018-11-26 19:53:42'),
('MPESA002', 2000, '0799012907', 'CHARLO KOSGEY', 0, '2018-11-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `LipaMpesa`
--

CREATE TABLE `LipaMpesa` (
  `mpesaCode` varchar(10) NOT NULL,
  `amount` int(5) NOT NULL,
  `sender` varchar(10) NOT NULL,
  `SENDERNAME` varchar(255) NOT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `LipaMpesa`
--

INSERT INTO `LipaMpesa` (`mpesaCode`, `amount`, `sender`, `SENDERNAME`, `seen`, `date`) VALUES
('MPESA001', 1000, '0799012907', 'KIPRONO DENIS', 1, '2018-11-26 19:53:42'),
('MPESA002', 4000, '0799012907', 'CHARLO KOSGEY', 0, '2018-11-01 00:00:00'),
('MPESA003', 4000, '0701907012', 'Harron glon', 0, '2018-11-01 00:00:00'),
('MPESA004', 4000, '0789901012', 'Alexander Bell', 0, '2018-11-02 00:00:00'),
('MPESA005', 3000, '0799012907', 'Glayo kyeke', 0, '2018-11-26 19:53:42');

--
-- Triggers `LipaMpesa`
--
DELIMITER $$
CREATE TRIGGER `history` AFTER UPDATE ON `LipaMpesa` FOR EACH ROW BEGIN
 INSERT INTO history VALUES(OLD.mpesaCode,OLD.amount,OLD.sender,OLD.SENDERNAME,OLD.seen,OLD.date);
 
 END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `mtrans`
-- (See below for the actual view)
--
CREATE TABLE `mtrans` (
`mpesaCode` varchar(10)
,`amount` int(5)
,`date` datetime
);

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `id` int(10) NOT NULL,
  `MpesaReceiptNumber` varchar(15) NOT NULL,
  `TransactionDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PhoneNumber` varchar(14) NOT NULL,
  `Amount` int(10) NOT NULL,
  `ResultCode` int(10) NOT NULL,
  `ResultDesc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Triggers `Payment`
--
DELIMITER $$
CREATE TRIGGER `movetrans` AFTER DELETE ON `Payment` FOR EACH ROW BEGIN

INSERT INTO Successful_T (MpesaReceiptNumber,TransactionDate,PhoneNumber,Amount,ResultCode,ResultDesc)
VALUES(OLD.MpesaReceiptNumber,OLD.TransactionDate,OLD.PhoneNumber,OLD.Amount,OLD.ResultCode,OLD.ResultDesc);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` int(5) NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `amount`, `category`, `created_at`) VALUES
(1, 'Chapo', 20, 'Main Meals', '2019-01-28 13:17:36'),
(2, 'Ugali', 5, 'Main Meals', '2019-01-28 13:17:36'),
(3, 'RICE', 10, 'Main Meals', '2019-01-28 13:17:36'),
(4, 'GITHERI', 20, 'Main Meals', '2019-01-28 13:17:36'),
(5, 'Meat', 35, 'Main Meals', '2019-01-28 13:17:36'),
(6, 'Pepsi', 35, 'DRINKS', '2019-01-28 13:20:06'),
(7, 'Fanta', 35, 'Drinks', '2019-01-28 13:20:06'),
(8, 'Novida', 40, 'DRINKS', '2019-01-28 13:20:06'),
(9, 'KREST', 30, 'DRINKS', '2019-01-28 13:20:06'),
(10, 'COCA', 35, 'DRINKS', '2019-01-28 13:20:06'),
(11, 'TEA', 15, 'BEVERAGES', '2019-01-28 13:24:09'),
(12, 'Coffee', 5, 'BEVERAGES', '2019-01-28 13:24:09'),
(13, 'Milk', 40, 'BEVERAGES', '2019-01-28 13:24:09'),
(14, 'COCOA', 30, 'BEVERAGES', '2019-01-28 13:24:09'),
(15, 'CHOCOLATE', 35, 'BEVERAGES', '2019-01-28 13:24:09'),
(16, 'BONE SOUP', 15, 'OTHERS', '2019-01-28 13:26:33'),
(17, 'OCoffee', 5, 'OTHERS', '2019-01-28 13:26:33'),
(18, 'Milk', 40, 'OTHERS', '2019-01-28 13:26:33'),
(19, 'OCOCOA', 30, 'OTHERS', '2019-01-28 13:26:33'),
(20, 'OCHOCOLATE', 35, 'OTHERS', '2019-01-28 13:26:33');

-- --------------------------------------------------------

--
-- Table structure for table `Rejected`
--

CREATE TABLE `Rejected` (
  `id` int(11) NOT NULL,
  `ResultCode` varchar(255) NOT NULL,
  `ResultDesc` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Rejected`
--

INSERT INTO `Rejected` (`id`, `ResultCode`, `ResultDesc`, `Date`) VALUES
(1, '1', '[MpesaCB - ]The balance is insufficient for the transaction.', '2019-01-31 13:46:21');

--
-- Triggers `Rejected`
--
DELIMITER $$
CREATE TRIGGER `recordFailed` AFTER DELETE ON `Rejected` FOR EACH ROW BEGIN

INSERT INTO Failed_T (ResultCode,ResultDesc,Date) VALUES(OLD.ResultCode,OLD.ResultDesc,OLD.Date);

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Successful_T`
--

CREATE TABLE `Successful_T` (
  `id` int(10) UNSIGNED NOT NULL,
  `MpesaReceiptNumber` varchar(15) NOT NULL,
  `TransactionDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PhoneNumber` varchar(14) NOT NULL,
  `Amount` int(10) NOT NULL,
  `ResultCode` int(10) NOT NULL,
  `ResultDesc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Successful_T`
--

INSERT INTO `Successful_T` (`id`, `MpesaReceiptNumber`, `TransactionDate`, `PhoneNumber`, `Amount`, `ResultCode`, `ResultDesc`) VALUES
(1, '', '2019-01-29 22:34:25', '254711337437', 5, 0, 'The service request is processed successfully.'),
(2, 'wedgyhj', '2019-01-31 14:49:08', '254799012907', 100, 0, 'waah');

-- --------------------------------------------------------

--
-- Structure for view `mtrans`
--
DROP TABLE IF EXISTS `mtrans`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root1`@`localhost` SQL SECURITY DEFINER VIEW `mtrans`  AS  select `LipaMpesa`.`mpesaCode` AS `mpesaCode`,`LipaMpesa`.`amount` AS `amount`,`LipaMpesa`.`date` AS `date` from `LipaMpesa` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Failed_T`
--
ALTER TABLE `Failed_T`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`mpesaCode`);

--
-- Indexes for table `LipaMpesa`
--
ALTER TABLE `LipaMpesa`
  ADD PRIMARY KEY (`mpesaCode`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Rejected`
--
ALTER TABLE `Rejected`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Successful_T`
--
ALTER TABLE `Successful_T`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Failed_T`
--
ALTER TABLE `Failed_T`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `Payment`
--
ALTER TABLE `Payment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `Rejected`
--
ALTER TABLE `Rejected`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Successful_T`
--
ALTER TABLE `Successful_T`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
