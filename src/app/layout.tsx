import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { store } from "@/redux/store";
import { Providers } from "./Provider/Provider";
import AuthProvider from "../components/authProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Solar-PVI | For Renewable Energy",
	description:
		"Harness the power of the sun with Solar-PVI's innovative solar panel solutions.",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<AuthProvider>
				<html lang="en" className="bg-white">
					<body className={inter.className}>{children}</body>
				</html>
			</AuthProvider>
		</Providers>
	);
}
