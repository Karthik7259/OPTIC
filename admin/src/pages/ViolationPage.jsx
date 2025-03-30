import { AlertTriangle, CheckCircle, Clock, ShieldAlert} from "lucide-react";
import { motion } from "framer-motion";


// import DailyOrders from "../components/orders/DailyOrders";
// import OrderDistribution from "../components/orders/OrderDistribution";
// import OrdersTable from "../components/orders/OrdersTable";
import Header from "../Components/common/Header";
import StatCard from "../Components/common/StatCard";
import Dailyviolation from "../Components/violation/Dailyviolation";
import Reports from "../Components/violation/Reports";
import ReprotTable from "./ReprotTable";

const violationReport = {
	totalViolations: "11",
	pendingInvestigations: "4",	
	resolvedViolations: "5",
	highRiskCases: "3",
};
const ViolationPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Orders"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard 
    name='Total Violations' 
    icon={AlertTriangle} 
    value={violationReport.totalViolations} 
    color='#EF4444' 
/>

<StatCard 
    name='Pending Investigations' 
    icon={Clock} 
    value={violationReport.pendingInvestigations} 
    color='#F59E0B' 
/>

<StatCard 
    name='Resolved Violations' 
    icon={CheckCircle} 
    value={violationReport.resolvedViolations} 
    color='#10B981' 
/>

<StatCard 
    name='High-Risk Cases' 
    icon={ShieldAlert} 
    value={violationReport.highRiskCases} 
    color='#6366F1' 
/>

				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<Dailyviolation />
					<Reports />
				</div>

				<ReprotTable />
			</main>
		</div>
	);
};
export default ViolationPage;