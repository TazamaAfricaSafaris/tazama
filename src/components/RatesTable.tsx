type Rate = {
    season: string;
    solo: string;
    twoSharing: string;
    fourSharing: string;
    sixSharing: string;
  };
  
  // Define the props type for the RateTable component
  type RateTableProps = {
    title: string;
    rates: Rate[];
  };

const RateTable: React.FC<RateTableProps> = ({ title, rates }) => {
    return (
      <div className="rounded-lg mb-6 overflow-auto">
        <p className="rounded-t-md w-full text-xl bg-lighter/25 border-x border-t border-dark/40 px-4 py-3">
          {title}
        </p>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="font-raleway">
              <th className="border border-dark/40 p-4">Season</th>
              <th className="border border-dark/40 p-4">Solo Traveler</th>
              <th className="border border-dark/40 p-4">2 People Sharing</th>
              <th className="border border-dark/40 p-4">4 People Sharing</th>
              <th className="border border-dark/40 p-4">6 People Sharing</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr className="font-raleway" key={index}>
                <td className="border border-dark/40 p-4">{rate.season}</td>
                <td className="border border-dark/40 p-4">{rate.solo}</td>
                <td className="border border-dark/40 p-4">{rate.twoSharing}</td>
                <td className="border border-dark/40 p-4">{rate.fourSharing}</td>
                <td className="border border-dark/40 p-4">{rate.sixSharing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default RateTable