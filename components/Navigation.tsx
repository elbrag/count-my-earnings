import Link from "next/link";

interface NavigationProps {}

const Input: React.FC<NavigationProps> = ({}) => {
	return (
		<nav className="flex justify-center gap-6 py-4">
			<Link href="/">Start</Link>
			<Link href="/settings">Settings</Link>
		</nav>
	);
};

export default Input;
