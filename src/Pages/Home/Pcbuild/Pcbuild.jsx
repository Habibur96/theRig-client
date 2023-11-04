
import { Link } from "react-router-dom";
import cpu from '../../../assets/icon/cpu.jpg'
import cpuCooler from '../../../assets/icon/cpuCooler.jpg'
import motherboard from '../../../assets/icon/motherboard.jpg'
import ram from '../../../assets/icon/Ram.jpg'
import storage from '../../../assets/icon/storage.jpg'
import gpu from '../../../assets/icon/gpu.jpg'
import psu from '../../../assets/icon/powerSupply.jpg'
import casing from '../../../assets/icon/cassing.jpg'
import monitor from '../../../assets/icon/monitor.jpg'
import casingCooler from '../../../assets/icon/casing-cooler.jpg'
import keyboard from '../../../assets/icon/keyboard.jpg'
import mouse from '../../../assets/icon/mouse.jpg'
import antiVirus from '../../../assets/icon/anti-virus.jpg'
import headphone from '../../../assets/icon/headphone.jpg'
import ups from '../../../assets/icon/ups.jpg'

const Pcbuild = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 pl-40">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
          <tr>
            <th>dfsafdfadsf</th>
            <th>dfsafdfadsf</th>
            <th>dfsafdfadsf</th>
          </tr>
          <tr>
            <th>Core Components</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className="w-12 h-12">
                    <img
                      src={cpu}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">CPU</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={cpuCooler}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm  font-bold">CPU cooler</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={motherboard}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Motherboard</div>
                </div>
              </div>
            </td>
            <td></td>
            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={ram}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">RAM</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 5 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={storage}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Storage</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 6 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={gpu}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Graphics Card</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 7 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={psu}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Power Supply</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 8 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={casing}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Casing</div>
                </div>
              </div>
            </td>

            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>

          <tr>
            <th>
              <div className="">Peripherals & Others</div>
            </th>
          </tr>

          {/* row 9*/}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className="w-12 h-12">
                    <img
                      src={monitor}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Monitor</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>

          {/* row 10 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={casingCooler}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Casing Cooler</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 11 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={keyboard}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Keyboard</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 11 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={mouse}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Mouse</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 12 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={antiVirus}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Anti Virus</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 13 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={headphone}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Headphone</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 14 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={ups}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">UPS</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info">Choose</button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pcbuild;
