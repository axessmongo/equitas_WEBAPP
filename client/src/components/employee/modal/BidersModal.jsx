import { Modal, Button } from 'react-bootstrap';

export default function BidersModal(props) {
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter bids_value"
                centered
                fullscreen
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Winxo Corp
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <div className='ourtable my-0'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='py-3'>S.No</th>
                                    <th className='py-3'>Biders Id</th>
                                    <th className='py-3'>Biders Name</th>
                                    <th className='py-3'>Biding Time</th>
                                    <th className='py-3'>Biders Mail</th>
                                    <th className='py-3'>Biders Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-3'>1</td>
                                    <td className='py-3'>eq7216</td>
                                    <td className='py-3'>Sundar</td>
                                    <td className='py-3'>2024-03-25 09:00:00</td>
                                    <td className='py-3'>sundar@gmail.com</td>
                                    <td className='py-3 bid_values'>70000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>2</td>
                                    <td className='py-3'>eq7217</td>
                                    <td className='py-3'>John</td>
                                    <td className='py-3'>2024-03-25 09:15:00</td>
                                    <td className='py-3'>john@gmail.com</td>
                                    <td className='py-3 bid_values'>75000</td>
                                </tr>

                                <tr>
                                    <td className='py-3'>3</td>
                                    <td className='py-3'>eq7218</td>
                                    <td className='py-3'>Alice</td>
                                    <td className='py-3'>2024-03-25 09:30:00</td>
                                    <td className='py-3'>alice@gmail.com</td>
                                    <td className='py-3 bid_values'>80000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>4</td>
                                    <td className='py-3'>eq7219</td>
                                    <td className='py-3'>Bob</td>
                                    <td className='py-3'>2024-03-25 09:45:00</td>
                                    <td className='py-3'>bob@gmail.com</td>
                                    <td className='py-3 bid_values'>85000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>5</td>
                                    <td className='py-3'>eq7220</td>
                                    <td className='py-3'>Emily</td>
                                    <td className='py-3'>2024-03-25 10:00:00</td>
                                    <td className='py-3'>emily@gmail.com</td>
                                    <td className='py-3 bid_values'>90000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>6</td>
                                    <td className='py-3'>eq7221</td>
                                    <td className='py-3'>David</td>
                                    <td className='py-3'>2024-03-25 10:15:00</td>
                                    <td className='py-3'>david@gmail.com</td>
                                    <td className='py-3 bid_values'>95000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>7</td>
                                    <td className='py-3'>eq7222</td>
                                    <td className='py-3'>Sophia</td>
                                    <td className='py-3'>2024-03-25 10:30:00</td>
                                    <td className='py-3'>sophia@gmail.com</td>
                                    <td className='py-3 bid_values'>100000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>8</td>
                                    <td className='py-3'>eq7223</td>
                                    <td className='py-3'>Michael</td>
                                    <td className='py-3'>2024-03-25 10:45:00</td>
                                    <td className='py-3'>michael@gmail.com</td>
                                    <td className='py-3 bid_values'>105000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>9</td>
                                    <td className='py-3'>eq7224</td>
                                    <td className='py-3'>Emma</td>
                                    <td className='py-3'>2024-03-25 11:00:00</td>
                                    <td className='py-3'>emma@gmail.com</td>
                                    <td className='py-3 bid_values'>110000</td>
                                </tr>
                                <tr>
                                    <td className='py-3'>10</td>
                                    <td className='py-3'>eq7225</td>
                                    <td className='py-3'>William</td>
                                    <td className='py-3'>2024-03-25 11:15:00</td>
                                    <td className='py-3'>william@gmail.com</td>
                                    <td className='py-3 bid_values'>115000</td>
                                </tr>

                            </tbody>
                        </table>


                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
