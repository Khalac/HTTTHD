USE [HealthCareDB]
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'f2d1e025-581d-45d1-b57a-0478c8899db3', N'hung995', N'123465', N'KH', N'Open')
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'6dc09047-35cd-4ae8-bc5a-0a69a6717f09', N'hung752', N'123456', N'KH', N'Open')
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'091f4d37-f23c-4787-88ed-4ee02cb7c7b8', N'hung05', N'string', N'KH', N'Open')
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'92a988f1-004b-4c5f-b6ef-83a82736babf', N'PhuongOanh', N'123456', N'KH', N'Open')
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'f10ae2e1-ccd9-4e1e-8f4b-882603fb32ea', N'NV_1', N'123456', N'NV', N'Open')
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'ede3255f-0cf2-4a93-8571-ac6a78293cbe', N'BaoKhang', N'123456', N'KH', N'Open')
GO
INSERT [dbo].[Khach_Hang] ([Id_Khach], [Full_Name], [Birhday], [Gender], [Adress], [User_Login_id]) VALUES (N'5bd21952-93bf-48ec-9dbc-04d770a931c9', N'Nguyễn Văn Ba', CAST(N'1890-05-19T00:00:00.0000000' AS DateTime2), N'Nam', N'123 Nguyễn Văn Cừ', N'6dc09047-35cd-4ae8-bc5a-0a69a6717f09')
GO
INSERT [dbo].[Khach_Hang] ([Id_Khach], [Full_Name], [Birhday], [Gender], [Adress], [User_Login_id]) VALUES (N'2d65b771-1d9d-4d33-8c46-4b87e874bf48', N'Tôn Phương Oanh', CAST(N'2002-02-07T00:00:00.0000000' AS DateTime2), N'Nữ', N'789 Tp HCM', N'92a988f1-004b-4c5f-b6ef-83a82736babf')
GO
INSERT [dbo].[Khach_Hang] ([Id_Khach], [Full_Name], [Birhday], [Gender], [Adress], [User_Login_id]) VALUES (N'72c1c1ce-1d1d-4e5d-a635-95f5cf1d14df', N'Trương Bảo Khang', CAST(N'2002-01-03T00:00:00.0000000' AS DateTime2), N'Nam', N'159 Nguyễn Văn Trỗi', N'ede3255f-0cf2-4a93-8571-ac6a78293cbe')
GO
INSERT [dbo].[Khach_Hang] ([Id_Khach], [Full_Name], [Birhday], [Gender], [Adress], [User_Login_id]) VALUES (N'84a5ff40-78d4-4ee5-96a1-a1ff29a82461', N'Đỗ Nam Trung', CAST(N'1946-06-14T00:00:00.0000000' AS DateTime2), N'Nam', N'456 Lý Thường Kiệt', N'091f4d37-f23c-4787-88ed-4ee02cb7c7b8')
GO
INSERT [dbo].[Nhan_Vien] ([Id_NhanVien], [Full_Name], [Birhday], [Gender], [Adress], [NhanVien_Login_id]) VALUES (N'f10ae2e1-ccd9-4e1e-8f4b-882603fb32ea', N'Đỗ Trọng Nhân', CAST(N'2002-02-05T00:00:00.0000000' AS DateTime2), N'Nam', N'123 HKFD', N'f10ae2e1-ccd9-4e1e-8f4b-882603fb32ea')
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'2aff92b5-a3d8-4b0d-82ed-134909b6ca63', N'Bao Hiem B+', 18, 30, N'Cap nhat chinh sach premium', 450000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'092286dc-9b7d-4180-a261-39b1345c42c7', N'Bao Hiem C', 31, 50, N'Bao hiem cho thanh nien', 500000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'0d4ce089-e28c-4f33-a104-3e5a8ced3276', N'Bao Hiem E', 81, 100, N'Bao hiem cho nguoi lon tuoi', 300000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'79374d2d-b8eb-4c82-a706-745d3a2aaa95', N'Bao Hiem B', 18, 30, N'Bao hiem cho vi thanh nien', 400000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'7e65a005-7813-4809-bca1-78cb6ea8063e', N'Bao Hiem C+', 31, 50, N'Cap nhat chinh sach premium', 550000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'35ed452d-de92-453a-a6fd-7d9037603e98', N'Hỗ trợ khám sức khỏe cho người lớn', 19, 50, N'Giúp cho người lớn có hoàn cảnh khó khăn được khám sức khỏe', 350000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'e1710a46-e3c0-4089-8686-8f5fead12511', N'Hỗ trợ khám sức khỏe cho người già', 19, 50, N'Giúp cho người già có hoàn cảnh khó khăn được khám sức khỏe', 350000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'5c42f4e4-709a-4384-b7d6-9c8664495ea5', N'Bao Hiem D', 51, 80, N'Bao hiem cho trung nien', 400000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'eef2c304-c011-4a71-a789-9dc8291d3dbd', N'Bao Hiem E+', 81, 100, N'Cap nhat chinh sach premium', 350000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'bed3b007-8207-42a7-b3f2-a19ada78683e', N'Bao Hiem D+', 51, 80, N'Cap nhat chinh sach premium', 450000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'71a7179a-3e49-4172-bfbc-c10c0c28f460', N'Bao Hiem A Pro Max', 1, 20, N'Bao hiem pro max cho tre em va thieu nien', 400000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'834211d5-02f3-4048-816f-c7d19acf0bf4', N'Hỗ trợ khám sức khỏe cho trẻ em', 1, 18, N'Giúp cho trẻ em có hoản cảnh khó khăn được khám sức khỏe', 300000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'81fe11b0-57ca-4469-8035-d1e4f12921cb', N'Bao Hiem A+', 1, 20, N'Cap nhat chinh sach premium', 150000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'1a6e8e72-1f59-4b7f-8ffd-eb58cbfa8a4e', N'Bao Hiem A', 1, 20, N'Bao hiem cho tre em va thieu nien', 150000)
GO
INSERT [dbo].[Chinh_Sach] ([Id_ChinhSach], [Name], [MinimumAge], [MaximumAge], [Description], [MonthlyPay]) VALUES (N'fac6071a-d3d2-4f49-b453-ffe3598b2e38', N'Bao Hiem B Pro Max', 18, 30, N'Bao hiem pro max cho vi thanh nien', 650000)
GO
INSERT [dbo].[Khach_Hang_Chinh_Sach] ([Id], [Status], [BuyDate], [Id_Khach], [Id_ChinhSach]) VALUES (N'79374d2d-b8eb-4c82-a706-745d3a2aaa95', N'Cancel', CAST(N'2021-09-09T00:00:00.0000000' AS DateTime2), N'5bd21952-93bf-48ec-9dbc-04d770a931c9', N'79374d2d-b8eb-4c82-a706-745d3a2aaa95')
GO
INSERT [dbo].[Khach_Hang_Chinh_Sach] ([Id], [Status], [BuyDate], [Id_Khach], [Id_ChinhSach]) VALUES (N'35ed452d-de92-453a-a6fd-7d9037603e98', N'Using', CAST(N'2023-12-24T00:00:00.0000000' AS DateTime2), N'72c1c1ce-1d1d-4e5d-a635-95f5cf1d14df', N'35ed452d-de92-453a-a6fd-7d9037603e98')
GO
INSERT [dbo].[Khach_Hang_Chinh_Sach] ([Id], [Status], [BuyDate], [Id_Khach], [Id_ChinhSach]) VALUES (N'e1710a46-e3c0-4089-8686-8f5fead12511', N'Waiting', CAST(N'2023-12-25T00:00:00.0000000' AS DateTime2), N'84a5ff40-78d4-4ee5-96a1-a1ff29a82461', N'e1710a46-e3c0-4089-8686-8f5fead12511')
GO
INSERT [dbo].[Khach_Hang_Chinh_Sach] ([Id], [Status], [BuyDate], [Id_Khach], [Id_ChinhSach]) VALUES (N'd29a2223-db59-44d4-964e-ec9d739964cc', N'Deny', CAST(N'2022-02-15T00:00:00.0000000' AS DateTime2), N'2d65b771-1d9d-4d33-8c46-4b87e874bf48', N'35ed452d-de92-453a-a6fd-7d9037603e98')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231122090253_Test', N'7.0.12')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231122092742_Test', N'7.0.12')
GO
