import Input from "@/components/Input";

export default function Index() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Settings
			<div>
				<Input name="salaryPerHour" label="Timlön" />
			</div>
		</main>
	);
}
