-- clear  tables
TRUNCATE TABLE components RESTART IDENTITY;
TRUNCATE TABLE saved_computers RESTART IDENTITY;

-- insert CPUs
INSERT INTO components (category, name, price, details, socket)
VALUES
('cpu', 'Intel Core i7-12700K', 320.00, '12 cores, 20 threads, 4.9 GHz boost', 'AMD'),
('cpu', 'AMD Ryzen 5 5600X', 199.99, '6 cores, 12 threads, 4.6 GHz boost', 'Intel'),
('cpu', 'Intel Core i5-13600K', 289.00, '14 cores, 20 threads, 5.1 GHz boost', 'AMD'),
('cpu', 'AMD Ryzen 7 5800X', 299.99, '8 cores, 16 threads, 4.7 GHz boost', 'Intel'),
('cpu', 'Intel Core i9-13900K', 589.00, '24 cores, 32 threads, 5.8 GHz boost', 'AMD'),
('cpu', 'AMD Ryzen 9 5900X', 399.99, '12 cores, 24 threads, 4.8 GHz boost', 'Intel'),
('cpu', 'Intel Core i3-12100F', 109.00, '4 cores, 8 threads, 4.3 GHz boost', 'AMD'),
('cpu', 'AMD Ryzen 3 3100', 99.99, '4 cores, 8 threads, 3.9 GHz boost', 'Intel'),
('cpu', 'Intel Core i7-13700KF', 409.00, '16 cores, 24 threads, 5.4 GHz boost', 'AMD'),
('cpu', 'AMD Ryzen 7 7700X', 349.99, '8 cores, 16 threads, 5.4 GHz boost', 'Intel');

-- insert GPUs
INSERT INTO components (category, name, price, details)
VALUES
('gpu', 'NVIDIA GeForce RTX 3070', 499.99, '8GB GDDR6, 5888 CUDA cores'),
('gpu', 'AMD Radeon RX 6800 XT', 649.99, '16GB GDDR6, 4608 stream processors'),
('gpu', 'NVIDIA GeForce RTX 3080', 699.99, '10GB GDDR6X, 8704 CUDA cores'),
('gpu', 'AMD Radeon RX 6700 XT', 479.99, '12GB GDDR6, 2560 stream processors'),
('gpu', 'NVIDIA GeForce RTX 3060 Ti', 399.99, '8GB GDDR6, 4864 CUDA cores'),
('gpu', 'AMD Radeon RX 6600 XT', 379.99, '8GB GDDR6, 2048 stream processors'),
('gpu', 'NVIDIA GeForce RTX 3050', 279.99, '8GB GDDR6, 2560 CUDA cores'),
('gpu', 'AMD Radeon RX 6500 XT', 199.99, '4GB GDDR6, 1024 stream processors'),
('gpu', 'NVIDIA GeForce GTX 1660 Super', 229.99, '6GB GDDR6, 1408 CUDA cores'),
('gpu', 'AMD Radeon RX 5600 XT', 289.99, '6GB GDDR6, 2304 stream processors');

-- insert motherboards
INSERT INTO components (category, name, price, details, socket)
VALUES
('motherboard', 'ASUS ROG STRIX Z690-E', 299.99, 'ATX, Wi-Fi 6, PCIe 5.0', 'AMD'),
('motherboard', 'MSI MPG B550 Gaming Edge', 179.99, 'ATX, Wi-Fi 6, PCIe 4.0', 'Intel'),
('motherboard', 'Gigabyte Z790 AORUS Elite', 249.99, 'ATX, PCIe 5.0, DDR5', 'AMD'),
('motherboard', 'ASUS TUF Gaming B550M-PLUS', 129.99, 'mATX, PCIe 4.0', 'Intel'),
('motherboard', 'MSI PRO Z690-A', 219.99, 'ATX, PCIe 5.0, DDR5', 'AMD'),
('motherboard', 'ASRock B550M Steel Legend', 149.99, 'mATX, PCIe 4.0', 'Intel'),
('motherboard', 'Gigabyte B550 AORUS Elite', 159.99, 'ATX, PCIe 4.0', 'Intel'),
('motherboard', 'ASUS Prime Z790-P', 199.99, 'ATX, PCIe 5.0, DDR5', 'AMD'),
('motherboard', 'MSI MAG B550 TOMAHAWK', 189.99, 'ATX, PCIe 4.0', 'Intel'),
('motherboard', 'Gigabyte Z690 UD', 229.99, 'ATX, PCIe 5.0', 'AMD');

-- insert RAM
INSERT INTO components (category, name, price, details)
VALUES
('ram', 'Corsair Vengeance LPX 16GB', 89.99, 'DDR4, 3200MHz'),
('ram', 'G.SKILL Trident Z RGB 32GB', 179.99, 'DDR4, 3600MHz'),
('ram', 'Kingston Fury Beast 16GB', 79.99, 'DDR4, 3200MHz'),
('ram', 'TEAMGROUP T-Force Delta RGB 32GB', 169.99, 'DDR4, 3200MHz'),
('ram', 'Crucial Ballistix 16GB', 89.99, 'DDR4, 3200MHz'),
('ram', 'Patriot Viper Steel 16GB', 79.99, 'DDR4, 3600MHz'),
('ram', 'ADATA XPG Z1 16GB', 69.99, 'DDR4, 3000MHz'),
('ram', 'Corsair Dominator Platinum RGB 32GB', 199.99, 'DDR4, 3600MHz'),
('ram', 'G.SKILL Ripjaws V 16GB', 79.99, 'DDR4, 3200MHz'),
('ram', 'HyperX Predator 16GB', 89.99, 'DDR4, 3200MHz');

-- insert storage
INSERT INTO components (category, name, price, details)
VALUES
('storage', 'Samsung 970 EVO Plus 1TB', 109.99, 'NVMe SSD, up to 3500 MB/s'),
('storage', 'WD Black SN850 1TB', 129.99, 'NVMe SSD, up to 7000 MB/s'),
('storage', 'Crucial MX500 1TB', 79.99, 'SATA SSD, up to 560 MB/s'),
('storage', 'Seagate Barracuda 2TB', 59.99, 'HDD, 7200 RPM'),
('storage', 'Samsung 980 Pro 2TB', 229.99, 'NVMe SSD, up to 7000 MB/s'),
('storage', 'Kingston A2000 1TB', 99.99, 'NVMe SSD, up to 2200 MB/s'),
('storage', 'WD Blue 1TB', 49.99, 'HDD, 5400 RPM'),
('storage', 'ADATA XPG SX8200 Pro 1TB', 109.99, 'NVMe SSD, up to 3500 MB/s'),
('storage', 'Toshiba X300 4TB', 139.99, 'HDD, 7200 RPM'),
('storage', 'Samsung T7 Portable SSD 1TB', 129.99, 'External SSD, USB 3.2');


-- seed saved_computers
INSERT INTO saved_computers (cpu, gpu, motherboard, ram, storage)
SELECT 
  (SELECT id FROM components WHERE category = 'cpu' AND socket = 'AMD' ORDER BY id LIMIT 1),
  (SELECT id FROM components WHERE category = 'gpu' ORDER BY id LIMIT 1),
  (SELECT id FROM components WHERE category = 'motherboard' AND socket = 'AMD' ORDER BY id LIMIT 1),
  (SELECT id FROM components WHERE category = 'ram' ORDER BY id LIMIT 1),
  (SELECT id FROM components WHERE category = 'storage' ORDER BY id LIMIT 1);

INSERT INTO saved_computers (cpu, gpu, motherboard, ram, storage)
SELECT 
  (SELECT id FROM components WHERE category = 'cpu' AND socket = 'Intel' ORDER BY id LIMIT 1),
  (SELECT id FROM components WHERE category = 'gpu' ORDER BY id OFFSET 1 LIMIT 1),
  (SELECT id FROM components WHERE category = 'motherboard' AND socket = 'Intel' ORDER BY id LIMIT 1),
  (SELECT id FROM components WHERE category = 'ram' ORDER BY id OFFSET 1 LIMIT 1),
  (SELECT id FROM components WHERE category = 'storage' ORDER BY id OFFSET 1 LIMIT 1);