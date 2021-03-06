import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { LIST_ALL_CAPABILITIES, TYPE_AIR, TYPE_LAND, TYPE_OWNERS, TYPE_SEA, TYPE_SPECIAL } from '../../../../constants';
import { GameInfoState, ShopItemType, ShopState } from '../../../../types';
import { shopConfirmPurchase, shopPurchaseRequest, shopRefundRequest } from '../../redux';
import { PurchaseableItem } from './PurchaseableItem';
import { ShopItem } from './ShopItem';

const shopStyle: any = {
    backgroundColor: 'Yellow',
    position: 'absolute',
    height: '170%',
    width: '1800%',
    marginLeft: '150%',
    marginTop: '20%'
};

const invisibleStyle = {
    display: 'none'
};

const purchaseButtonStyle: any = {
    position: 'absolute',
    bottom: '1%',
    right: '1%',
    height: '5%',
    width: '10%',
    backgroundColor: 'red'
};

const purchaseableItemsContainerStyle: any = {
    backgroundColor: '#b9b9b9',
    position: 'relative',
    width: '15%',
    height: '80%',
    float: 'left',
    top: '2.5%',
    margin: '.5%'
};

interface Props {
    isSelected: boolean;
    points: number;
    shopItems: ShopState;
    purchase: any;
    refund: any;
    confirmPurchase: any;
}

class ShopMenu extends Component<Props> {
    render() {
        const { shopItems, isSelected, purchase, refund, points, confirmPurchase } = this.props;

        const airShopComponents = TYPE_OWNERS[TYPE_AIR].map((typeId: number, index: number) => (
            <PurchaseableItem key={index} purchase={purchase} typeId={typeId} />
        ));
        const landShopComponents = TYPE_OWNERS[TYPE_LAND].map((typeId: number, index: number) => (
            <PurchaseableItem key={index} purchase={purchase} typeId={typeId} />
        ));
        const seaShopComponents = TYPE_OWNERS[TYPE_SEA].map((typeId: number, index: number) => (
            <PurchaseableItem key={index} purchase={purchase} typeId={typeId} />
        ));
        const specialShopComponents = TYPE_OWNERS[TYPE_SPECIAL].map((typeId: number, index: number) => (
            <PurchaseableItem key={index} purchase={purchase} typeId={typeId} />
        ));
        const capabilityShopComponents = Object.values(LIST_ALL_CAPABILITIES).map((typeId, index) => (
            <PurchaseableItem key={index} purchase={purchase} typeId={typeId} />
        ));

        const shopItemComponents = shopItems.map((shopItem: ShopItemType, index: number) => (
            <ShopItem key={index} shopItem={shopItem} refund={(shopItemId: number) => refund(shopItemId)} />
        ));

        const standardOnClick = (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
        };

        return (
            <div style={isSelected ? shopStyle : invisibleStyle} onClick={standardOnClick}>
                <div>Shop Menu</div>
                <div>Points: {points}</div>

                <div style={purchaseableItemsContainerStyle}>
                    <div>Air</div>
                    {airShopComponents}
                </div>

                <div style={purchaseableItemsContainerStyle}>
                    <div>Land</div>
                    {landShopComponents}
                </div>

                <div style={purchaseableItemsContainerStyle}>
                    <div>Maritime</div>
                    {seaShopComponents}
                </div>

                <div style={purchaseableItemsContainerStyle}>
                    <div>SOF</div>
                    {specialShopComponents}
                </div>

                <div style={purchaseableItemsContainerStyle}>
                    <div>Capabilities</div>
                    {capabilityShopComponents}
                </div>

                <div style={purchaseableItemsContainerStyle}>
                    <div>Cart</div>
                    {shopItemComponents}
                </div>

                <div
                    style={purchaseButtonStyle}
                    onClick={event => {
                        event.preventDefault();
                        confirmPurchase();
                        event.stopPropagation();
                    }}
                >
                    Confirm Purchase
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ shopItems, gameInfo }: { shopItems: ShopState; gameInfo: GameInfoState }) => ({
    shopItems,
    points: gameInfo.gamePoints
});

const mapActionsToProps = {
    purchase: shopPurchaseRequest,
    refund: shopRefundRequest,
    confirmPurchase: shopConfirmPurchase
};

export default connect(mapStateToProps, mapActionsToProps)(ShopMenu);
