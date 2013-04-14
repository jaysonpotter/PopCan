window.onload = function () {
    
    var canvas = document.getElementById('PopCan'),
        ctx = canvas.getContext('2d');
        
    // START DEMO CONTENT

    var popCanDrawing = function () {

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(40.6, 169.1);
      ctx.bezierCurveTo(1.7, 153.6, -12.6, 95.7, 12.5, 62.7);
      ctx.bezierCurveTo(18.4, 55.0, 26.5, 51.3, 33.5, 45.0);
      ctx.bezierCurveTo(41.1, 38.2, 48.1, 30.4, 56.4, 24.5);
      ctx.bezierCurveTo(62.4, 20.2, 69.3, 18.4, 76.7, 18.4);
      ctx.bezierCurveTo(80.5, 18.4, 84.4, 18.9, 87.8, 20.6);
      ctx.bezierCurveTo(91.7, 22.5, 94.6, 26.2, 99.2, 25.7);
      ctx.bezierCurveTo(103.8, 25.2, 106.3, 20.4, 110.2, 18.9);
      ctx.bezierCurveTo(114.9, 17.1, 120.0, 19.2, 124.8, 18.6);
      ctx.bezierCurveTo(135.1, 17.3, 139.8, 4.5, 151.2, 3.2);
      ctx.bezierCurveTo(159.6, 2.3, 170.3, -0.9, 178.5, 0.3);
      ctx.bezierCurveTo(188.3, 1.7, 198.8, 7.8, 206.3, 13.9);
      ctx.bezierCurveTo(215.2, 21.1, 223.3, 29.3, 229.0, 39.3);
      ctx.bezierCurveTo(231.1, 43.1, 233.9, 52.0, 237.0, 54.6);
      ctx.bezierCurveTo(239.9, 57.0, 246.5, 58.1, 250.1, 59.5);
      ctx.bezierCurveTo(268.8, 66.9, 297.3, 74.9, 293.6, 99.9);
      ctx.bezierCurveTo(290.6, 120.1, 264.5, 131.9, 247.3, 137.4);
      ctx.bezierCurveTo(227.7, 143.6, 206.8, 143.6, 187.7, 151.8);
      ctx.bezierCurveTo(180.1, 155.1, 174.4, 160.9, 167.0, 164.3);
      ctx.bezierCurveTo(157.9, 168.4, 148.5, 171.7, 138.8, 174.1);
      ctx.bezierCurveTo(116.8, 179.6, 94.2, 180.6, 72.0, 175.2);
      ctx.bezierCurveTo(61.5, 172.7, 51.0, 173.6, 40.6, 169.1);
      ctx.lineTo(40.6, 169.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(212.4, 30.8);
      ctx.bezierCurveTo(221.4, 40.8, 229.1, 52.5, 234.3, 64.8);
      ctx.bezierCurveTo(236.9, 70.9, 239.3, 77.3, 240.4, 83.9);
      ctx.bezierCurveTo(241.8, 91.7, 239.5, 97.6, 238.0, 105.1);
      ctx.bezierCurveTo(254.6, 104.1, 271.3, 103.2, 287.8, 103.2);
      ctx.bezierCurveTo(286.8, 106.1, 260.5, 106.5, 255.4, 106.8);
      ctx.bezierCurveTo(246.5, 107.2, 236.9, 106.5, 229.1, 112.7);
      ctx.bezierCurveTo(237.1, 111.6, 245.9, 111.2, 253.8, 110.6);
      ctx.bezierCurveTo(258.8, 110.3, 275.3, 106.8, 279.1, 111.1);
      ctx.bezierCurveTo(269.4, 111.7, 259.7, 114.4, 250.2, 115.2);
      ctx.bezierCurveTo(242.0, 116.0, 227.0, 113.0, 222.3, 120.0);
      ctx.bezierCurveTo(229.6, 122.2, 240.2, 118.8, 247.8, 119.0);
      ctx.bezierCurveTo(255.3, 119.1, 262.3, 119.9, 270.1, 119.3);
      ctx.bezierCurveTo(268.9, 121.4, 259.4, 120.7, 256.0, 121.3);
      ctx.bezierCurveTo(249.6, 122.6, 243.4, 122.4, 236.8, 122.7);
      ctx.bezierCurveTo(223.3, 123.3, 209.4, 123.9, 196.2, 127.2);
      ctx.bezierCurveTo(189.1, 129.0, 183.2, 126.1, 176.1, 126.0);
      ctx.bezierCurveTo(171.1, 125.8, 165.7, 126.7, 160.7, 127.1);
      ctx.bezierCurveTo(154.5, 127.6, 137.1, 125.4, 134.6, 132.6);
      ctx.bezierCurveTo(151.3, 131.5, 168.8, 132.5, 185.3, 130.0);
      ctx.bezierCurveTo(191.0, 129.1, 196.2, 130.5, 201.8, 129.6);
      ctx.bezierCurveTo(207.4, 128.7, 213.0, 127.6, 218.7, 127.6);
      ctx.bezierCurveTo(225.1, 127.6, 236.5, 125.4, 242.0, 127.6);
      ctx.bezierCurveTo(233.9, 130.8, 223.1, 130.0, 214.5, 130.7);
      ctx.bezierCurveTo(205.7, 131.4, 197.3, 132.5, 188.5, 132.5);
      ctx.bezierCurveTo(179.2, 132.5, 170.7, 132.7, 161.5, 133.7);
      ctx.bezierCurveTo(150.3, 134.9, 134.5, 132.7, 126.5, 141.0);
      ctx.bezierCurveTo(131.3, 142.3, 138.0, 140.2, 143.0, 139.9);
      ctx.bezierCurveTo(151.0, 139.5, 159.0, 138.9, 167.1, 138.3);
      ctx.bezierCurveTo(183.2, 137.1, 199.4, 136.5, 215.6, 137.0);
      ctx.bezierCurveTo(186.7, 140.5, 157.8, 141.1, 129.1, 144.4);
      ctx.bezierCurveTo(127.2, 144.6, 112.6, 145.6, 115.9, 150.0);
      ctx.bezierCurveTo(116.8, 151.3, 131.2, 148.7, 133.9, 148.5);
      ctx.bezierCurveTo(141.7, 148.0, 149.4, 146.2, 157.1, 145.7);
      ctx.bezierCurveTo(161.1, 145.5, 166.8, 146.8, 171.5, 145.7);
      ctx.bezierCurveTo(171.6, 146.3, 171.7, 146.8, 171.8, 147.4);
      ctx.bezierCurveTo(165.8, 146.7, 159.7, 148.5, 153.7, 149.1);
      ctx.bezierCurveTo(151.0, 149.3, 148.2, 149.1, 145.6, 149.6);
      ctx.bezierCurveTo(143.7, 150.0, 141.0, 151.9, 139.7, 152.1);
      ctx.bezierCurveTo(136.9, 152.6, 131.8, 152.1, 128.5, 152.3);
      ctx.bezierCurveTo(124.0, 152.6, 120.2, 152.5, 115.6, 153.5);
      ctx.bezierCurveTo(107.7, 155.1, 101.5, 155.3, 94.9, 161.1);
      ctx.bezierCurveTo(102.0, 160.8, 109.2, 157.9, 115.7, 157.0);
      ctx.bezierCurveTo(120.4, 156.4, 127.6, 155.8, 133.2, 155.3);
      ctx.bezierCurveTo(143.5, 154.5, 154.7, 152.8, 164.1, 152.7);
      ctx.bezierCurveTo(157.0, 157.6, 143.8, 156.8, 135.4, 157.6);
      ctx.bezierCurveTo(123.7, 158.8, 112.2, 161.2, 100.7, 163.1);
      ctx.bezierCurveTo(79.4, 166.4, 60.4, 170.3, 40.6, 159.1);
      ctx.bezierCurveTo(22.1, 148.6, 11.0, 125.2, 8.7, 104.8);
      ctx.bezierCurveTo(6.3, 83.6, 16.4, 66.7, 34.5, 56.3);
      ctx.bezierCurveTo(39.3, 53.6, 44.6, 50.8, 49.6, 46.8);
      ctx.bezierCurveTo(57.6, 40.3, 66.2, 30.3, 77.7, 31.9);
      ctx.bezierCurveTo(83.6, 32.7, 88.9, 35.3, 94.4, 37.4);
      ctx.bezierCurveTo(98.7, 39.1, 99.0, 35.6, 102.1, 36.1);
      ctx.bezierCurveTo(106.3, 36.8, 109.7, 32.4, 112.9, 30.3);
      ctx.bezierCurveTo(116.3, 28.1, 120.5, 28.8, 124.4, 28.8);
      ctx.bezierCurveTo(128.8, 28.8, 130.9, 30.4, 134.0, 26.7);
      ctx.bezierCurveTo(136.8, 23.3, 139.3, 19.4, 142.5, 16.3);
      ctx.bezierCurveTo(148.1, 11.1, 156.5, 11.6, 163.8, 9.8);
      ctx.bezierCurveTo(180.4, 5.7, 200.8, 19.6, 212.4, 30.8);
      ctx.lineTo(212.4, 30.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(207.7, 31.5);
      ctx.bezierCurveTo(216.6, 42.0, 227.0, 54.2, 230.7, 67.6);
      ctx.bezierCurveTo(233.6, 78.2, 240.0, 97.5, 231.8, 106.8);
      ctx.bezierCurveTo(235.0, 87.0, 225.4, 60.7, 213.0, 45.2);
      ctx.bezierCurveTo(206.4, 36.9, 199.4, 27.9, 190.1, 22.4);
      ctx.bezierCurveTo(183.1, 18.2, 173.7, 17.4, 166.5, 13.1);
      ctx.bezierCurveTo(181.1, 11.3, 196.7, 23.2, 207.7, 31.5);
      ctx.lineTo(207.7, 31.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 152, 152)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(174.9, 30.8);
      ctx.bezierCurveTo(169.1, 27.9, 165.0, 21.7, 160.2, 17.4);
      ctx.bezierCurveTo(166.3, 19.7, 172.4, 24.6, 174.9, 30.8);
      ctx.lineTo(174.9, 30.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(169.3, 34.3);
      ctx.bezierCurveTo(164.0, 32.7, 155.1, 22.7, 150.7, 18.6);
      ctx.bezierCurveTo(159.3, 20.4, 164.7, 27.3, 169.3, 34.3);
      ctx.lineTo(169.3, 34.3);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(177.5, 23.3);
      ctx.bezierCurveTo(180.6, 23.1, 183.6, 25.0, 184.0, 28.4);
      ctx.bezierCurveTo(181.0, 25.9, 176.7, 22.5, 177.5, 23.3);
      ctx.lineTo(177.5, 23.3);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(166.2, 41.0);
      ctx.bezierCurveTo(164.4, 37.9, 159.9, 34.9, 157.4, 32.4);
      ctx.bezierCurveTo(154.1, 29.1, 150.9, 26.2, 146.7, 24.2);
      ctx.bezierCurveTo(155.0, 22.9, 163.7, 34.3, 166.2, 41.0);
      ctx.lineTo(166.2, 41.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(153.5, 35.5);
      ctx.bezierCurveTo(156.5, 38.7, 159.7, 42.2, 160.5, 46.5);
      ctx.bezierCurveTo(153.1, 40.1, 148.3, 29.5, 137.5, 28.4);
      ctx.bezierCurveTo(143.9, 26.7, 148.5, 32.6, 153.5, 35.5);
      ctx.lineTo(153.5, 35.5);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(208.6, 45.0);
      ctx.bezierCurveTo(208.8, 45.8, 209.1, 46.5, 209.3, 47.3);
      ctx.bezierCurveTo(201.8, 46.7, 192.5, 43.9, 186.0, 46.5);
      ctx.bezierCurveTo(178.4, 49.6, 171.6, 52.4, 166.8, 59.1);
      ctx.bezierCurveTo(161.9, 66.1, 159.6, 75.3, 158.0, 83.6);
      ctx.bezierCurveTo(155.8, 80.2, 156.7, 75.3, 152.6, 73.7);
      ctx.bezierCurveTo(150.0, 81.3, 160.8, 88.4, 154.0, 95.8);
      ctx.bezierCurveTo(152.8, 93.0, 152.4, 89.2, 151.0, 86.7);
      ctx.bezierCurveTo(150.7, 86.2, 150.8, 82.3, 149.2, 82.8);
      ctx.bezierCurveTo(147.8, 83.3, 147.8, 85.1, 148.1, 86.2);
      ctx.bezierCurveTo(149.6, 91.3, 154.1, 101.6, 148.8, 105.4);
      ctx.bezierCurveTo(146.2, 100.1, 145.5, 93.9, 141.6, 89.2);
      ctx.bezierCurveTo(141.9, 94.8, 148.9, 109.6, 143.3, 113.0);
      ctx.bezierCurveTo(142.1, 108.7, 141.0, 104.3, 139.6, 100.1);
      ctx.bezierCurveTo(139.2, 98.6, 138.2, 94.1, 136.6, 94.5);
      ctx.bezierCurveTo(135.4, 94.8, 134.6, 95.4, 135.4, 96.7);
      ctx.bezierCurveTo(137.6, 100.6, 142.0, 115.9, 137.5, 117.3);
      ctx.bezierCurveTo(136.0, 112.4, 133.2, 95.3, 128.4, 93.4);
      ctx.bezierCurveTo(129.0, 102.1, 132.6, 110.3, 133.4, 119.0);
      ctx.bezierCurveTo(129.7, 119.4, 130.2, 114.9, 129.6, 112.1);
      ctx.bezierCurveTo(128.6, 107.9, 127.2, 104.0, 125.7, 99.6);
      ctx.bezierCurveTo(124.9, 97.3, 124.6, 94.8, 123.6, 92.6);
      ctx.bezierCurveTo(122.0, 89.1, 120.1, 93.0, 120.7, 95.4);
      ctx.bezierCurveTo(122.5, 103.3, 126.0, 110.5, 125.9, 119.0);
      ctx.bezierCurveTo(122.5, 118.3, 118.0, 98.0, 115.8, 93.2);
      ctx.bezierCurveTo(112.7, 86.2, 113.9, 97.2, 114.5, 99.5);
      ctx.bezierCurveTo(116.1, 105.6, 118.3, 111.8, 117.7, 118.1);
      ctx.bezierCurveTo(114.6, 114.7, 114.3, 108.8, 113.1, 104.5);
      ctx.bezierCurveTo(111.4, 99.0, 109.0, 93.7, 107.0, 88.3);
      ctx.bezierCurveTo(113.4, 86.8, 120.7, 90.2, 127.4, 89.8);
      ctx.bezierCurveTo(140.6, 89.1, 144.9, 81.4, 149.4, 70.3);
      ctx.bezierCurveTo(155.0, 56.2, 164.2, 49.6, 175.4, 41.3);
      ctx.bezierCurveTo(179.8, 38.0, 187.7, 30.7, 193.7, 31.7);
      ctx.bezierCurveTo(200.3, 32.8, 204.3, 40.5, 208.6, 45.0);
      ctx.lineTo(208.6, 45.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(122.4, 34.0);
      ctx.bezierCurveTo(128.9, 36.7, 132.0, 41.0, 136.9, 45.8);
      ctx.bezierCurveTo(130.4, 40.5, 124.8, 35.9, 116.9, 32.7);
      ctx.bezierCurveTo(119.0, 32.1, 120.9, 32.5, 122.4, 34.0);
      ctx.lineTo(122.4, 34.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(103.4, 51.0);
      ctx.bezierCurveTo(109.3, 57.8, 113.8, 65.7, 117.2, 74.0);
      ctx.bezierCurveTo(108.8, 64.1, 104.4, 54.4, 93.9, 46.7);
      ctx.bezierCurveTo(87.4, 41.9, 78.0, 36.2, 69.6, 36.7);
      ctx.bezierCurveTo(82.7, 34.6, 94.3, 42.1, 103.4, 51.0);
      ctx.lineTo(103.4, 51.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(142.2, 43.8);
      ctx.bezierCurveTo(139.5, 41.1, 136.4, 38.8, 133.7, 36.0);
      ctx.bezierCurveTo(138.2, 36.1, 140.0, 40.7, 142.2, 43.8);
      ctx.lineTo(142.2, 43.8);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(127.5, 44.1);
      ctx.bezierCurveTo(122.5, 42.9, 117.1, 42.0, 112.9, 38.6);
      ctx.bezierCurveTo(118.2, 39.0, 123.8, 40.0, 127.5, 44.1);
      ctx.lineTo(127.5, 44.1);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(152.0, 46.5);
      ctx.bezierCurveTo(149.0, 44.3, 146.6, 41.2, 144.2, 38.3);
      ctx.bezierCurveTo(148.9, 37.9, 150.3, 43.1, 152.0, 46.5);
      ctx.lineTo(152.0, 46.5);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(95.2, 55.1);
      ctx.bezierCurveTo(100.0, 59.2, 102.4, 64.4, 105.9, 69.4);
      ctx.bezierCurveTo(103.1, 68.2, 99.6, 63.1, 99.5, 63.0);
      ctx.bezierCurveTo(97.4, 60.8, 95.4, 58.4, 93.1, 56.2);
      ctx.bezierCurveTo(86.1, 49.5, 75.6, 40.5, 65.3, 41.9);
      ctx.bezierCurveTo(75.0, 37.5, 90.3, 46.6, 95.2, 55.1);
      ctx.lineTo(95.2, 55.1);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(83.0, 55.1);
      ctx.bezierCurveTo(90.9, 59.1, 95.6, 66.8, 100.0, 74.0);
      ctx.bezierCurveTo(93.4, 67.5, 87.6, 60.2, 80.2, 54.6);
      ctx.bezierCurveTo(72.6, 48.8, 65.1, 49.5, 56.7, 46.2);
      ctx.bezierCurveTo(64.6, 44.1, 79.0, 46.9, 83.0, 55.1);
      ctx.lineTo(83.0, 55.1);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(111.3, 51.7);
      ctx.bezierCurveTo(116.6, 57.2, 119.9, 64.1, 123.6, 70.6);
      ctx.bezierCurveTo(118.7, 63.6, 111.9, 51.1, 105.0, 46.5);
      ctx.bezierCurveTo(107.8, 47.4, 111.0, 48.4, 111.3, 51.7);
      ctx.lineTo(111.3, 51.7);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(69.6, 52.9);
      ctx.bezierCurveTo(77.1, 56.9, 82.6, 63.1, 88.5, 69.0);
      ctx.bezierCurveTo(84.5, 67.3, 67.2, 56.1, 62.8, 54.9);
      ctx.bezierCurveTo(58.8, 53.7, 53.4, 53.2, 49.6, 51.3);
      ctx.bezierCurveTo(56.2, 49.9, 63.1, 51.4, 69.6, 52.9);
      ctx.lineTo(69.6, 52.9);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(128.4, 67.8);
      ctx.bezierCurveTo(128.9, 68.4, 120.9, 57.7, 116.9, 51.3);
      ctx.bezierCurveTo(123.9, 53.4, 127.0, 61.3, 128.4, 67.8);
      ctx.lineTo(128.4, 67.8);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(201.4, 74.5);
      ctx.bezierCurveTo(202.9, 80.9, 204.7, 87.1, 204.6, 93.8);
      ctx.bezierCurveTo(199.5, 79.5, 194.9, 65.2, 188.8, 51.3);
      ctx.bezierCurveTo(197.3, 56.5, 197.2, 66.5, 201.4, 74.5);
      ctx.lineTo(201.4, 74.5);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(186.0, 60.8);
      ctx.bezierCurveTo(184.6, 57.9, 183.1, 54.9, 182.5, 51.7);
      ctx.bezierCurveTo(184.7, 54.3, 187.2, 57.4, 186.0, 60.8);
      ctx.lineTo(186.0, 60.8);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(154.3, 52.9);
      ctx.bezierCurveTo(153.9, 53.6, 152.9, 54.1, 152.6, 55.1);
      ctx.bezierCurveTo(151.9, 54.5, 150.9, 53.3, 150.4, 52.3);
      ctx.bezierCurveTo(151.9, 51.9, 152.9, 52.3, 154.3, 52.9);
      ctx.lineTo(154.3, 52.9);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(212.9, 59.9);
      ctx.bezierCurveTo(218.4, 69.5, 219.6, 79.5, 220.8, 90.3);
      ctx.bezierCurveTo(217.2, 77.3, 214.0, 64.1, 208.1, 52.0);
      ctx.bezierCurveTo(210.4, 54.1, 212.0, 56.9, 212.9, 59.9);
      ctx.lineTo(212.9, 59.9);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(148.5, 59.6);
      ctx.bezierCurveTo(146.3, 57.7, 144.4, 55.5, 142.5, 53.2);
      ctx.bezierCurveTo(146.2, 52.4, 147.6, 56.6, 148.5, 59.6);
      ctx.lineTo(148.5, 59.6);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(140.6, 57.7);
      ctx.bezierCurveTo(141.2, 59.7, 141.9, 61.6, 142.5, 63.6);
      ctx.bezierCurveTo(138.7, 62.1, 137.7, 57.5, 135.4, 54.4);
      ctx.bezierCurveTo(137.9, 53.4, 139.7, 55.2, 140.6, 57.7);
      ctx.lineTo(140.6, 57.7);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(133.7, 59.6);
      ctx.bezierCurveTo(135.1, 62.2, 136.5, 64.8, 136.3, 67.8);
      ctx.bezierCurveTo(133.2, 64.0, 131.1, 59.5, 127.9, 55.7);
      ctx.bezierCurveTo(131.1, 53.3, 132.8, 56.8, 133.7, 59.6);
      ctx.lineTo(133.7, 59.6);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(207.1, 67.8);
      ctx.bezierCurveTo(209.9, 81.5, 212.9, 94.0, 214.1, 108.3);
      ctx.bezierCurveTo(208.8, 90.4, 206.8, 72.5, 200.2, 54.9);
      ctx.bezierCurveTo(205.0, 56.9, 205.6, 63.4, 207.1, 67.8);
      ctx.lineTo(207.1, 67.8);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.1, 55.7);
      ctx.bezierCurveTo(65.5, 58.1, 82.1, 67.5, 91.0, 82.8);
      ctx.bezierCurveTo(102.4, 102.3, 116.0, 140.3, 91.2, 156.0);
      ctx.bezierCurveTo(104.6, 135.6, 104.1, 112.0, 91.2, 91.0);
      ctx.bezierCurveTo(80.2, 73.1, 63.7, 59.0, 42.0, 57.7);
      ctx.bezierCurveTo(44.0, 56.1, 46.6, 56.1, 49.1, 55.7);
      ctx.lineTo(49.1, 55.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 152, 152)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(183.7, 69.0);
      ctx.bezierCurveTo(183.6, 69.6, 183.5, 70.3, 183.4, 70.9);
      ctx.bezierCurveTo(181.2, 65.8, 177.2, 61.6, 175.8, 56.0);
      ctx.bezierCurveTo(179.5, 59.6, 182.1, 64.2, 183.7, 69.0);
      ctx.lineTo(183.7, 69.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(179.4, 77.3);
      ctx.bezierCurveTo(177.2, 73.7, 169.1, 64.2, 170.8, 60.8);
      ctx.bezierCurveTo(175.3, 65.3, 177.0, 71.6, 179.4, 77.3);
      ctx.lineTo(179.4, 77.3);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(91.7, 99.3);
      ctx.bezierCurveTo(98.6, 119.0, 104.6, 148.2, 80.7, 159.3);
      ctx.bezierCurveTo(60.2, 168.7, 39.7, 158.9, 26.2, 141.4);
      ctx.bezierCurveTo(13.2, 124.5, 4.0, 94.1, 17.5, 74.9);
      ctx.bezierCurveTo(29.9, 57.2, 50.9, 58.9, 67.6, 70.2);
      ctx.bezierCurveTo(78.2, 77.4, 86.3, 87.7, 91.7, 99.3);
      ctx.lineTo(91.7, 99.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 152, 152)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.8, 74.0);
      ctx.bezierCurveTo(39.2, 59.0, 15.7, 75.4, 19.5, 103.5);
      ctx.bezierCurveTo(22.4, 125.0, 36.5, 156.9, 62.1, 157.2);
      ctx.bezierCurveTo(60.3, 155.6, 58.8, 153.8, 58.9, 151.5);
      ctx.bezierCurveTo(45.2, 153.9, 35.1, 142.4, 33.0, 130.1);
      ctx.bezierCurveTo(32.4, 126.6, 31.6, 122.8, 31.7, 119.2);
      ctx.bezierCurveTo(31.8, 116.5, 34.7, 107.1, 34.1, 105.1);
      ctx.bezierCurveTo(33.4, 103.0, 28.2, 99.8, 26.9, 96.4);
      ctx.bezierCurveTo(25.9, 93.4, 24.1, 89.0, 25.0, 85.9);
      ctx.bezierCurveTo(27.0, 79.1, 28.4, 94.4, 30.1, 97.2);
      ctx.bezierCurveTo(34.6, 105.2, 45.2, 98.4, 52.0, 98.8);
      ctx.bezierCurveTo(58.5, 99.2, 60.3, 97.6, 61.2, 90.8);
      ctx.bezierCurveTo(61.6, 87.4, 58.5, 81.4, 60.9, 78.8);
      ctx.bezierCurveTo(65.5, 86.1, 68.1, 99.5, 59.4, 105.1);
      ctx.bezierCurveTo(61.3, 106.9, 61.4, 109.1, 62.6, 111.3);
      ctx.bezierCurveTo(63.8, 113.4, 67.7, 115.7, 69.8, 117.2);
      ctx.bezierCurveTo(76.2, 121.7, 82.5, 125.9, 88.1, 130.9);
      ctx.bezierCurveTo(89.9, 132.6, 96.2, 136.8, 94.3, 140.2);
      ctx.bezierCurveTo(93.0, 142.7, 86.8, 136.0, 85.2, 134.4);
      ctx.bezierCurveTo(79.0, 128.2, 72.7, 122.4, 65.9, 116.9);
      ctx.bezierCurveTo(67.1, 123.3, 69.3, 125.7, 73.7, 129.3);
      ctx.bezierCurveTo(77.8, 132.7, 82.1, 136.7, 86.7, 139.8);
      ctx.bezierCurveTo(88.2, 140.8, 96.2, 149.4, 88.2, 146.3);
      ctx.bezierCurveTo(85.7, 145.4, 84.7, 141.5, 82.1, 140.2);
      ctx.bezierCurveTo(79.1, 138.6, 74.4, 132.8, 71.3, 130.0);
      ctx.bezierCurveTo(68.2, 138.4, 78.0, 140.8, 81.8, 144.4);
      ctx.bezierCurveTo(83.7, 146.2, 89.1, 149.6, 86.4, 151.7);
      ctx.bezierCurveTo(83.5, 154.0, 74.6, 142.3, 72.5, 140.2);
      ctx.bezierCurveTo(70.7, 143.2, 69.9, 147.1, 66.5, 148.7);
      ctx.bezierCurveTo(68.7, 150.6, 70.7, 152.6, 73.0, 154.3);
      ctx.bezierCurveTo(75.8, 156.3, 75.0, 160.1, 71.9, 157.5);
      ctx.bezierCurveTo(67.0, 153.3, 66.4, 148.0, 60.1, 151.2);
      ctx.bezierCurveTo(61.7, 152.7, 63.9, 154.1, 65.2, 155.8);
      ctx.bezierCurveTo(67.5, 159.2, 67.7, 158.4, 65.3, 160.0);
      ctx.bezierCurveTo(62.6, 161.8, 53.0, 159.1, 50.3, 156.4);
      ctx.bezierCurveTo(49.4, 155.6, 45.4, 154.8, 44.1, 154.0);
      ctx.bezierCurveTo(40.6, 152.1, 37.7, 149.6, 35.0, 146.8);
      ctx.bezierCurveTo(29.1, 140.5, 24.2, 132.7, 20.5, 124.9);
      ctx.bezierCurveTo(13.9, 110.8, 10.7, 89.2, 21.2, 75.7);
      ctx.bezierCurveTo(32.7, 60.9, 49.1, 62.8, 62.8, 74.0);
      ctx.lineTo(62.8, 74.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(246.8, 68.7);
      ctx.bezierCurveTo(244.2, 68.7, 241.5, 68.7, 238.9, 68.7);
      ctx.bezierCurveTo(239.8, 65.3, 245.1, 67.3, 248.0, 66.2);
      ctx.bezierCurveTo(248.0, 67.2, 247.5, 67.9, 246.8, 68.7);
      ctx.lineTo(246.8, 68.7);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(196.7, 91.4);
      ctx.bezierCurveTo(193.7, 84.1, 189.0, 75.5, 191.3, 67.5);
      ctx.bezierCurveTo(195.5, 74.8, 194.3, 83.6, 196.7, 91.4);
      ctx.lineTo(196.7, 91.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(175.5, 83.6);
      ctx.bezierCurveTo(171.2, 79.5, 169.3, 74.0, 166.9, 68.7);
      ctx.bezierCurveTo(170.1, 73.4, 173.5, 78.2, 175.5, 83.6);
      ctx.lineTo(175.5, 83.6);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(53.9, 74.5);
      ctx.bezierCurveTo(57.0, 81.6, 60.5, 93.2, 51.6, 96.6);
      ctx.bezierCurveTo(42.8, 100.1, 33.1, 97.7, 31.0, 87.9);
      ctx.bezierCurveTo(27.7, 73.0, 41.9, 63.6, 53.9, 74.5);
      ctx.lineTo(53.9, 74.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(258.8, 72.8);
      ctx.bezierCurveTo(264.8, 70.3, 265.0, 75.9, 259.6, 75.0);
      ctx.bezierCurveTo(255.5, 74.3, 251.0, 76.3, 246.8, 76.1);
      ctx.bezierCurveTo(238.7, 75.8, 240.3, 72.8, 247.3, 72.8);
      ctx.bezierCurveTo(251.2, 72.8, 254.8, 72.2, 258.8, 72.8);
      ctx.lineTo(258.8, 72.8);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(169.3, 85.2);
      ctx.bezierCurveTo(169.1, 87.1, 170.1, 89.6, 170.2, 90.8);
      ctx.bezierCurveTo(169.1, 87.2, 163.8, 83.7, 166.2, 79.4);
      ctx.bezierCurveTo(168.2, 80.8, 167.9, 85.6, 169.3, 85.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(280.6, 81.9);
      ctx.bezierCurveTo(267.9, 82.7, 255.4, 83.8, 242.8, 82.8);
      ctx.bezierCurveTo(245.1, 78.8, 257.1, 80.9, 261.3, 80.7);
      ctx.bezierCurveTo(264.1, 80.5, 281.4, 77.8, 280.6, 81.9);
      ctx.lineTo(280.6, 81.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(189.2, 84.7);
      ctx.bezierCurveTo(188.7, 88.7, 189.4, 95.2, 191.3, 98.1);
      ctx.bezierCurveTo(187.2, 92.5, 185.8, 87.1, 188.0, 80.7);
      ctx.bezierCurveTo(187.9, 82.4, 188.8, 83.3, 189.2, 84.7);
      ctx.lineTo(189.2, 84.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(105.9, 93.1);
      ctx.bezierCurveTo(108.6, 99.9, 109.2, 107.9, 110.7, 114.9);
      ctx.bezierCurveTo(104.3, 110.6, 102.3, 94.8, 99.1, 87.9);
      ctx.bezierCurveTo(103.0, 85.8, 104.7, 90.1, 105.9, 93.1);
      ctx.lineTo(105.9, 93.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(289.3, 89.5);
      ctx.bezierCurveTo(285.2, 91.4, 273.2, 90.9, 267.2, 91.4);
      ctx.bezierCurveTo(264.8, 91.6, 254.8, 93.8, 253.4, 92.2);
      ctx.bezierCurveTo(252.3, 90.8, 246.3, 93.0, 244.0, 91.7);
      ctx.bezierCurveTo(246.4, 86.3, 261.2, 89.0, 266.1, 89.1);
      ctx.bezierCurveTo(270.7, 89.1, 275.4, 89.0, 280.0, 88.7);
      ctx.bezierCurveTo(282.8, 88.5, 289.1, 86.0, 289.3, 89.5);
      ctx.lineTo(289.3, 89.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(165.9, 97.1);
      ctx.bezierCurveTo(164.0, 95.2, 162.1, 92.8, 163.8, 90.3);
      ctx.bezierCurveTo(164.6, 91.6, 166.0, 95.6, 165.9, 97.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(89.6, 98.6);
      ctx.bezierCurveTo(86.4, 98.3, 83.1, 95.1, 82.3, 92.3);
      ctx.bezierCurveTo(84.8, 94.3, 87.5, 96.2, 89.6, 98.6);
      ctx.lineTo(89.6, 98.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(184.9, 103.5);
      ctx.bezierCurveTo(181.9, 101.1, 180.4, 98.5, 182.8, 95.0);
      ctx.bezierCurveTo(184.0, 97.7, 184.6, 100.6, 184.9, 103.5);
      ctx.lineTo(184.9, 103.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(86.4, 105.1);
      ctx.bezierCurveTo(88.8, 104.9, 95.3, 110.3, 92.4, 111.8);
      ctx.bezierCurveTo(90.0, 113.0, 75.5, 97.4, 73.8, 95.8);
      ctx.bezierCurveTo(78.0, 98.9, 82.2, 102.0, 86.4, 105.1);
      ctx.lineTo(86.4, 105.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(288.4, 96.5);
      ctx.bezierCurveTo(287.2, 99.0, 246.1, 103.1, 241.7, 100.1);
      ctx.bezierCurveTo(249.1, 94.8, 258.1, 99.0, 265.9, 97.2);
      ctx.bezierCurveTo(273.2, 95.5, 281.0, 97.8, 288.4, 96.5);
      ctx.lineTo(288.4, 96.5);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(77.2, 106.3);
      ctx.bezierCurveTo(79.8, 104.3, 96.2, 117.9, 96.4, 122.1);
      ctx.bezierCurveTo(91.8, 125.0, 87.1, 116.8, 83.6, 113.6);
      ctx.bezierCurveTo(78.1, 108.6, 72.3, 103.7, 66.5, 99.0);
      ctx.bezierCurveTo(69.2, 98.5, 74.5, 104.5, 77.2, 106.3);
      ctx.lineTo(77.2, 106.3);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(58.6, 110.6);
      ctx.bezierCurveTo(61.1, 117.1, 72.3, 136.1, 67.3, 142.6);
      ctx.bezierCurveTo(64.7, 145.9, 54.4, 147.0, 50.7, 146.3);
      ctx.bezierCurveTo(45.1, 145.3, 42.9, 141.6, 40.1, 137.0);
      ctx.bezierCurveTo(35.3, 128.8, 35.0, 118.2, 36.3, 109.0);
      ctx.bezierCurveTo(37.0, 104.7, 44.4, 103.6, 47.8, 103.2);
      ctx.bezierCurveTo(54.7, 102.3, 54.9, 104.9, 58.6, 110.6);
      ctx.lineTo(58.6, 110.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 152, 152)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(206.2, 114.2);
      ctx.bezierCurveTo(202.0, 117.3, 206.3, 107.3, 206.2, 105.4);
      ctx.bezierCurveTo(206.6, 108.3, 206.6, 111.3, 206.2, 114.2);
      ctx.lineTo(206.2, 114.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(77.8, 113.0);
      ctx.bezierCurveTo(82.0, 118.6, 88.8, 121.0, 93.1, 126.2);
      ctx.bezierCurveTo(98.5, 133.0, 92.5, 130.2, 89.1, 127.7);
      ctx.bezierCurveTo(85.9, 125.4, 83.8, 123.2, 80.9, 120.3);
      ctx.bezierCurveTo(77.5, 116.7, 67.6, 111.4, 67.3, 106.8);
      ctx.bezierCurveTo(71.0, 108.6, 73.6, 112.2, 77.8, 113.0);
      ctx.lineTo(77.8, 113.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(51.9, 112.1);
      ctx.bezierCurveTo(51.9, 115.9, 48.9, 119.7, 45.1, 117.3);
      ctx.bezierCurveTo(48.6, 116.3, 49.4, 103.8, 51.9, 112.1);
      ctx.lineTo(51.9, 112.1);
      ctx.closePath();
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(171.1, 123.7);
      ctx.bezierCurveTo(170.0, 123.9, 170.1, 124.5, 169.3, 124.0);
      ctx.bezierCurveTo(170.0, 123.4, 170.6, 123.8, 171.1, 123.7);
      ctx.lineTo(171.1, 123.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.1, 129.5);
      ctx.bezierCurveTo(60.3, 131.9, 64.8, 139.3, 62.7, 140.2);
      ctx.bezierCurveTo(60.0, 141.5, 57.0, 143.4, 53.9, 143.7);
      ctx.bezierCurveTo(47.5, 144.2, 43.3, 139.3, 41.7, 133.5);
      ctx.bezierCurveTo(40.8, 130.1, 42.0, 126.2, 45.5, 124.7);
      ctx.bezierCurveTo(46.5, 124.2, 52.5, 123.5, 53.7, 123.7);
      ctx.bezierCurveTo(58.6, 124.6, 56.4, 126.6, 60.1, 129.5);
      ctx.lineTo(60.1, 129.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(142.5, 124.8);
      ctx.bezierCurveTo(142.8, 124.2, 143.5, 125.0, 140.6, 125.7);
      ctx.bezierCurveTo(140.9, 125.1, 141.3, 124.6, 141.6, 124.0);
      ctx.bezierCurveTo(141.6, 124.6, 141.9, 124.8, 142.5, 124.8);
      ctx.lineTo(142.5, 124.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 48, 48)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(57.7, 131.6);
      ctx.bezierCurveTo(58.2, 132.1, 62.1, 138.6, 58.2, 140.4);
      ctx.bezierCurveTo(54.4, 142.0, 51.4, 140.0, 49.4, 138.0);
      ctx.bezierCurveTo(44.2, 132.8, 56.0, 127.0, 57.7, 131.6);
      ctx.lineTo(57.7, 131.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 152, 152)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(80.6, 155.3);
      ctx.bezierCurveTo(76.6, 155.2, 71.8, 149.9, 70.4, 146.5);
      ctx.bezierCurveTo(74.0, 144.5, 81.5, 151.8, 80.6, 155.3);
      ctx.lineTo(80.6, 155.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(147.3, 161.1);
      ctx.bezierCurveTo(143.5, 166.6, 129.1, 165.3, 122.6, 166.3);
      ctx.bezierCurveTo(113.1, 167.6, 100.2, 171.0, 90.9, 169.2);
      ctx.bezierCurveTo(96.8, 164.8, 108.0, 165.1, 115.3, 164.4);
      ctx.bezierCurveTo(124.5, 163.5, 138.2, 158.8, 147.3, 161.1);
      ctx.lineTo(147.3, 161.1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
   
    // END DEMO CONTENT

    if(canvas && ctx) {
        PopCan.play(canvas, ctx);
        PopCan.drawings(popCanDrawing);
    }
}