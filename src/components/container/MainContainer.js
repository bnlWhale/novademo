import * as React from "react";


class MainContainer extends React.Component {

    render() {
        let i=30;
        let a = Array(i).fill(1);
        let b = a.map((val, index)=>{
            return (
                <p> row {index}  </p>
            )
        } )

        {/*
        return (
            <div className="main-body">
                <div className="wrap-body">
                    <div className="main-header">
                       <h1>NOVA</h1>
                    </div>
                    <div className="sub-body">
                        <div className="l_box">
                            {b}
                        </div>
                        <div className="right_panel">
                            <div className="r_box">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, ornare at turpis quis,
                                    varius pulvinar lorem. Morbi eleifend nisi eget viverra fermentum. Vivamus interdum dui quis
                                    orci
                                    placerat semper. Morbi lobortis ex sit amet risus cursus pharetra. Interdum et malesuada fames
                                    ac
                                    ante ipsum primis in faucibus. Etiam luctus leo augue, non facilisis nunc aliquam sed. Aliquam
                                    erat
                                    volutpat. Nam laoreet cursus nunc, id tincidunt justo. Nullam elit magna, finibus at aliquam ut,
                                    blandit vel magna. Phasellus ullamcorper urna a leo luctus vestibulum. Duis posuere leo ac
                                    lectus
                                    auctor, convallis aliquam odio gravida.</p>
                                <p>Sed porttitor turpis quis est pellentesque, in accumsan risus porta. Orci varius natoque
                                    penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis elit sed felis dapibus
                                    sodales
                                    ut auctor nibh. Mauris dapibus diam in ante scelerisque ultrices. Nam tincidunt lorem vel
                                    ultricies
                                    sodales. Nullam facilisis placerat pulvinar. Nullam in arcu urna. Pellentesque tempus lorem et
                                    ligula viverra convallis. Integer id vehicula quam, sit amet dictum urna. Praesent pellentesque
                                    hendrerit risus non pharetra. In a libero finibus, hendrerit justo quis, consequat nunc. Sed
                                    iaculis
                                    efficitur nunc sagittis hendrerit. Praesent ligula augue, malesuada quis pretium semper,
                                    facilisis
                                    non quam. Phasellus ac placerat mi. Quisque ac fermentum tellus.</p>
                                <p>Duis facilisis aliquet neque, nec dignissim dolor venenatis non. Donec quis consectetur nibh. Ut
                                    ut
                                    purus in metus pellentesque feugiat non ut augue. Aenean at leo vulputate, viverra ligula ut,
                                    aliquam turpis. Cras nunc dui, sollicitudin quis lorem sit amet, auctor mollis libero. Integer
                                    non
                                    magna ipsum. Etiam ullamcorper urna tortor, nec tempor tortor elementum et. Donec placerat mi
                                    nisi,
                                    id rhoncus lacus sodales sed. Nullam lorem risus, sollicitudin non lacinia a, scelerisque et
                                    mauris.
                                    Vivamus nisi enim, egestas ac ante eu, molestie vestibulum felis. Praesent vitae dui tincidunt
                                    mi
                                    malesuada pharetra. Integer vehicula leo at laoreet tempor. In vestibulum rutrum tellus, eget
                                    suscipit orci egestas et. Vestibulum tincidunt aliquam dui, ac pharetra eros commodo ut. Sed
                                    tempus
                                    eget orci a laoreet. Donec gravida imperdiet congue.</p>
                                <p>Proin at iaculis velit, et finibus lorem. Aenean ac enim pretium, hendrerit nunc in, tincidunt
                                    mauris. Suspendisse congue ipsum nec libero sagittis pretium. Quisque vulputate sem est, in
                                    laoreet
                                    orci sagittis sed. Vestibulum in lectus eleifend, lacinia lectus in, maximus tortor. Mauris quis
                                    posuere arcu, nec hendrerit mauris. In pulvinar sodales rhoncus. In hac habitasse platea
                                    dictumst.
                                    Ut tempor mattis ligula sed dapibus.</p>
                                <p>Sed vel condimentum elit. Donec varius ex eget vestibulum egestas. Cras sed cursus massa, eget
                                    feugiat sapien. Cras maximus lectus mi, a rhoncus libero gravida quis. Fusce luctus malesuada
                                    elementum. Integer nec lectus convallis, ullamcorper orci eu, bibendum nisl. Cras hendrerit mi
                                    fringilla ante egestas pharetra. Ut sollicitudin suscipit turpis, eleifend pharetra nisl mollis
                                    sit
                                    amet. Nulla mauris elit, venenatis luctus dictum sit amet, aliquet nec leo. Fusce sed sapien
                                    libero.
                                    In lacus dui, porttitor tempus ullamcorper ac, laoreet id massa. Nulla facilisi.</p>
                                <p>Proin at iaculis velit, et finibus lorem. Aenean ac enim pretium, hendrerit nunc in, tincidunt
                                    mauris. Suspendisse congue ipsum nec libero sagittis pretium. Quisque vulputate sem est, in
                                    laoreet
                                    orci sagittis sed. Vestibulum in lectus eleifend, lacinia lectus in, maximus tortor. Mauris quis
                                    posuere arcu, nec hendrerit mauris. In pulvinar sodales rhoncus. In hac habitasse platea
                                    dictumst.
                                    Ut tempor mattis ligula sed dapibus.</p>
                                <p>Sed vel condimentum elit. Donec varius ex eget vestibulum egestas. Cras sed cursus massa, eget
                                    feugiat sapien. Cras maximus lectus mi, a rhoncus libero gravida quis. Fusce luctus malesuada
                                    elementum. Integer nec lectus convallis, ullamcorper orci eu, bibendum nisl. Cras hendrerit mi
                                    fringilla ante egestas pharetra. Ut sollicitudin suscipit turpis, eleifend pharetra nisl mollis
                                    sit
                                    amet. Nulla mauris elit, venenatis luctus dictum sit amet, aliquet nec leo. Fusce sed sapien
                                    libero.
                                    In lacus dui, porttitor tempus ullamcorper ac, laoreet id massa. Nulla facilisi.</p>
                                <p>Proin at iaculis velit, et finibus lorem. Aenean ac enim pretium, hendrerit nunc in, tincidunt
                                    mauris. Suspendisse congue ipsum nec libero sagittis pretium. Quisque vulputate sem est, in
                                    laoreet
                                    orci sagittis sed. Vestibulum in lectus eleifend, lacinia lectus in, maximus tortor. Mauris quis
                                    posuere arcu, nec hendrerit mauris. In pulvinar sodales rhoncus. In hac habitasse platea
                                    dictumst.
                                    Ut tempor mattis ligula sed dapibus.</p>
                                <p>Sed vel condimentum elit. Donec varius ex eget vestibulum egestas. Cras sed cursus massa, eget
                                    feugiat sapien. Cras maximus lectus mi, a rhoncus libero gravida quis. Fusce luctus malesuada
                                    elementum. Integer nec lectus convallis, ullamcorper orci eu, bibendum nisl. Cras hendrerit mi
                                    fringilla ante egestas pharetra. Ut sollicitudin suscipit turpis, eleifend pharetra nisl mollis
                                    sit
                                    amet. Nulla mauris elit, venenatis luctus dictum sit amet, aliquet nec leo. Fusce sed sapien
                                    libero.
                                    In lacus dui, porttitor tempus ullamcorper ac, laoreet id massa. Nulla facilisi.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, ornare at turpis quis,
                                    varius pulvinar lorem. Morbi eleifend nisi eget viverra fermentum. Vivamus interdum dui quis
                                    orci
                                    placerat semper. Morbi lobortis ex sit amet risus cursus pharetra. Interdum et malesuada fames
                                    ac
                                    ante ipsum primis in faucibus. Etiam luctus leo augue, non facilisis nunc aliquam sed. Aliquam
                                    erat
                                    volutpat. Nam laoreet cursus nunc, id tincidunt justo. Nullam elit magna, finibus at aliquam ut,
                                    blandit vel magna. Phasellus ullamcorper urna a leo luctus vestibulum. Duis posuere leo ac
                                    lectus
                                    auctor, convallis aliquam odio gravida.</p>
                                <p>Sed porttitor turpis quis est pellentesque, in accumsan risus porta. Orci varius natoque
                                    penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis elit sed felis dapibus
                                    sodales
                                    ut auctor nibh. Mauris dapibus diam in ante scelerisque ultrices. Nam tincidunt lorem vel
                                    ultricies
                                    sodales. Nullam facilisis placerat pulvinar. Nullam in arcu urna. Pellentesque tempus lorem et
                                    ligula viverra convallis. Integer id vehicula quam, sit amet dictum urna. Praesent pellentesque
                                    hendrerit risus non pharetra. In a libero finibus, hendrerit justo quis, consequat nunc. Sed
                                    iaculis
                                    efficitur nunc sagittis hendrerit. Praesent ligula augue, malesuada quis pretium semper,
                                    facilisis
                                    non quam. Phasellus ac placerat mi. Quisque ac fermentum tellus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, ornare at turpis quis,
                                    varius pulvinar lorem. Morbi eleifend nisi eget viverra fermentum. Vivamus interdum dui quis
                                    orci
                                    placerat semper. Morbi lobortis ex sit amet risus cursus pharetra. Interdum et malesuada fames
                                    ac
                                    ante ipsum primis in faucibus. Etiam luctus leo augue, non facilisis nunc aliquam sed. Aliquam
                                    erat
                                    volutpat. Nam laoreet cursus nunc, id tincidunt justo. Nullam elit magna, finibus at aliquam ut,
                                    blandit vel magna. Phasellus ullamcorper urna a leo luctus vestibulum. Duis posuere leo ac
                                    lectus
                                    auctor, convallis aliquam odio gravida.</p>
                                <p>Sed porttitor turpis quis est pellentesque, in accumsan risus porta. Orci varius natoque
                                    penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis elit sed felis dapibus
                                    sodales
                                    ut auctor nibh. Mauris dapibus diam in ante scelerisque ultrices. Nam tincidunt lorem vel
                                    ultricies
                                    sodales. Nullam facilisis placerat pulvinar. Nullam in arcu urna. Pellentesque tempus lorem et
                                    ligula viverra convallis. Integer id vehicula quam, sit amet dictum urna. Praesent pellentesque
                                    hendrerit risus non pharetra. In a libero finibus, hendrerit justo quis, consequat nunc. Sed
                                    iaculis
                                    efficitur nunc sagittis hendrerit. Praesent ligula augue, malesuada quis pretium semper,
                                    facilisis
                                    non quam. Phasellus ac placerat mi. Quisque ac 111 222 33.</p>
                            </div>
                            <div className="main-footer">footer</div>
                        </div>

                    </div>
                </div>
            </div>
        )
        */}

            return(
                <div className="right_panel">
                    <div className="top">定高</div>
                    <div className="center">自适应</div>
                    <div className="bottom">定高</div>
                </div>

            )
    }

}

export default MainContainer;
