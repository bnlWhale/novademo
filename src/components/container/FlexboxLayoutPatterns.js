import * as React from 'react';
import '../cssdir/CssOnFlexLayout.css'
import 'antd/dist/antd.css';
import {Progress, Button} from 'antd';


export default () => {

    return (
        <div className="container">
            <div className="item_container">
                <div><h3>stretching middle, fixing spacing id:1</h3></div>
                <div className="container_id_1">
                    <div className="item_id_1"></div>
                    <div className="item_id_1_center"></div>
                    <div className="item_id_1"></div>
                </div>

            </div>
            <div className="item_container">
                <div><h3>alternating grid id:2</h3></div>
                <div className="container_id_2">
                    <div className="item_id_2">item 1</div>
                    <div className="item_id_2">item 2</div>
                    <div className="item_id_2">item 3</div>
                    <div className="item_id_2">item 4</div>
                    <div className="item_id_2">item 5</div>
                    <div className="item_id_2">item 6</div>
                </div>
            </div>
            <div className="item_container">
                <div><h3> 3x3 grid</h3></div>
               <div className="container_id_3">
                   <div className="item_id_3">1</div>
                   <div className="item_id_3">2</div>
                   <div className="item_id_3">3</div>
                   <div className="item_id_3">4</div>
                   <div className="item_id_3">5</div>
                   <div className="item_id_3">6</div>
                   <div className="item_id_3">7</div>
                   <div className="item_id_3">8</div>
                   <div className="item_id_3">9</div>
               </div>
            </div>
            <div className="item_container">
                <div><h3> 3x3 grid  1:1</h3></div>
                <div className="container_id_4">
                    <div className="item_id_4">1</div>
                    <div className="item_id_4">2</div>
                    <div className="item_id_4">3</div>
                    <div className="item_id_4">4</div>
                    <div className="item_id_4">5</div>
                    <div className="item_id_4">6</div>
                    <div className="item_id_4">7</div>
                    <div className="item_id_4">8</div>
                    <div className="item_id_4">9</div>
                </div>
            </div>
        </div>

    )
}
