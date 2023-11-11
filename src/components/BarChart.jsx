import { Line } from "react-chartjs-2";
import
{
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Colors,
    Title
} from "chart.js";

const BarChart = ( { chartData } ) =>
{
    // `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=2`
    ChartJS.register(
        LineElement,
        PointElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend,
        Colors,
        Title
    )

    const options = {
        plugins: {
            colors: {
                forceOverride: true
            }
        },
    }

    return (
        <>
            <Line data={chartData} options={options} />
        </>
    )
}

export default BarChart