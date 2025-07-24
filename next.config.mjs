/** @type {import('next').NextConfig} */
const nextConfig = {
	// images: {
	//     domains: ['server-minio-dev.labontest.tech'],
	//   },
	images: {
		unoptimized: true, // add this
	},
};

export default nextConfig;
