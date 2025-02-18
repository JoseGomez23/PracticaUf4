-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2025 a las 19:23:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lobbiesdb`
--
CREATE DATABASE IF NOT EXISTS `lobbiesdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lobbiesdb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lobbies`
--

CREATE TABLE `lobbies` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `players` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lobbies`
--

INSERT INTO `lobbies` (`id`, `name`, `players`) VALUES
(0, '[value-2]', '[value-3]'),
(1, '[value-2]', '[value-3]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `players`
--

CREATE TABLE `players` (
  `username` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `owned_items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`owned_items`)),
  `stars_collected` int(11) DEFAULT 0,
  `current_stars` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `players`
--

INSERT INTO `players` (`username`, `password`, `admin`, `owned_items`, `stars_collected`, `current_stars`) VALUES
('Alvaro', 'P@ssw0rd', 0, NULL, 0, 0),
('Alvaro2', '$2y$10$xSseHB1UD3vUDLG09hnGhuYfKoEn8MMCCDwUEw5w7JS.0IterW1Oy', 0, NULL, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lobbies`
--
ALTER TABLE `lobbies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`username`),
  ADD KEY `idx_stars_collected` (`stars_collected`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
