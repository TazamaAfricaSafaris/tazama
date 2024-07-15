/* eslint-disable react/no-unescaped-entities */
const WishlistTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-dark/40 md:table-row font-raleway">
              <th className="block md:table-cell bg-primary/75 px-2 py-4 text-left font-semibold border border-dark/40 ">
                Equipments and Supplies
              </th>
              <th className="block md:table-cell bg-primary/75 px-2 py-4 text-left font-semibold border border-dark/40">
                For Children
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group font-raleway">
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">Washing machine - All facilities</td>
              <td className="block md:table-cell p-2 border border-dark/40">Toys and games</td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">Dryers - All facilities</td>
              <td className="block md:table-cell p-2 border border-dark/40">
                Children's Books (Please familiarize yourself with a list of banned children's books in Tanzania)
              </td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">Crutches</td>
              <td className="block md:table-cell p-2 border border-dark/40">Crocs</td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">
                Computers for medical teams for access and running our CRM software
              </td>
              <td className="block md:table-cell p-2 border border-dark/40">Reusable menstruation pads</td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">
                Smartphones for the medical team to add patient photos to our CRM software
              </td>
              <td className="block md:table-cell p-2 border border-dark/40">Baby / Infant formula</td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">
                Tablets for house mothers to access basic CRM Information
              </td>
              <td className="block md:table-cell p-2 border border-dark/40">
                Baby feeding bottles - Cleft Lip/Palate Nurser
              </td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">Clean gloves</td>
              <td className="block md:table-cell p-2 border border-dark/40">Children's underwear</td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">Gauze bandage</td>
              <td className="block md:table-cell p-2 border border-dark/40">Socks</td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">Crepe bandage</td>
              <td className="block md:table-cell p-2 border border-dark/40">
                Stationary - pens, pencils, coloring books, Paper scissors, A4 colored and plain papers
              </td>
            </tr>
            <tr className="border border-dark/40 md:table-row">
              <td className="block md:table-cell p-2 border border-dark/40">
                Bedsheets and other linens for all facilities
              </td>
              <td className="block md:table-cell p-2 border border-dark/40"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default WishlistTable