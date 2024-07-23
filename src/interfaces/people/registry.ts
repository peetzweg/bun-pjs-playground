// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { ArkScale, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemCodeUpgradeAuthorization, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity, CumulusPalletParachainSystemUnincludedSegmentAncestor, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate, CumulusPalletParachainSystemUnincludedSegmentSegmentTracker, CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesCoreAggregateMessageOrigin, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportMessagesProcessMessageError, FrameSupportRealityCallback, FrameSupportRealityContextualAlias, FrameSupportRealityIdentitySocial, FrameSupportRealityJudgement, FrameSupportRealityProofOfInkInkSpec, FrameSupportRealityStatement, FrameSupportRealityTruth, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesIdAmount, PalletBalancesReasons, PalletBalancesReserveData, PalletCollatorSelectionCall, PalletCollatorSelectionCandidateInfo, PalletCollatorSelectionError, PalletCollatorSelectionEvent, PalletIdentityAuthorityProperties, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityJudgement, PalletIdentityPersonalIdentity, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMessageQueueBookState, PalletMessageQueueCall, PalletMessageQueueError, PalletMessageQueueEvent, PalletMessageQueueNeighbours, PalletMessageQueuePage, PalletMobRuleCall, PalletMobRuleCase, PalletMobRuleCaseDetails, PalletMobRuleError, PalletMobRuleEvent, PalletMobRuleMobCredit, PalletMobRuleVoteTally, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletPeopleBuilder, PalletPeopleCall, PalletPeopleError, PalletPeopleEvent, PalletPeopleExtensionProvideForAliasAccount, PalletPeopleExtensionProvideForPersonalIdentityAccount, PalletPeopleOrigin, PalletPeoplePersonRecord, PalletPrivacyVoucherCall, PalletPrivacyVoucherError, PalletPrivacyVoucherEvent, PalletPrivacyVoucherExtensionProvideForVoucherClaimer, PalletProofOfInkAllocation, PalletProofOfInkCall, PalletProofOfInkCandidate, PalletProofOfInkConfigRecord, PalletProofOfInkCredibility, PalletProofOfInkDesignStatus, PalletProofOfInkError, PalletProofOfInkEvent, PalletProofOfInkExtensionProvideForReferral, PalletProofOfInkFamily, PalletProofOfInkFamilyKind, PalletProofOfInkHoldReason, PalletProofOfInkInkChoice, PalletProofOfInkPerson, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSkipFeelessPaymentEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PeopleRococoRuntimeOriginCaller, PeopleRococoRuntimePeopleIdentityInfo, PeopleRococoRuntimeRuntime, PeopleRococoRuntimeRuntimeHoldReason, PeopleRococoRuntimeSessionKeys, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV6AbridgedHostConfiguration, PolkadotPrimitivesV6AbridgedHrmpChannel, PolkadotPrimitivesV6AsyncBackingAsyncBackingParams, PolkadotPrimitivesV6PersistedValidationData, PolkadotPrimitivesV6UpgradeGoAhead, PolkadotPrimitivesV6UpgradeRestriction, PolkadotRuntimeCommonIdentityMigratorPalletCall, PolkadotRuntimeCommonIdentityMigratorPalletEvent, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, VerifiableRingVrfImplEncodedPublicKey, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    ArkScale: ArkScale;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemCodeUpgradeAuthorization: CumulusPalletParachainSystemCodeUpgradeAuthorization;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    CumulusPalletParachainSystemUnincludedSegmentAncestor: CumulusPalletParachainSystemUnincludedSegmentAncestor;
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate;
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: CumulusPalletParachainSystemUnincludedSegmentSegmentTracker;
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesCoreAggregateMessageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportMessagesProcessMessageError: FrameSupportMessagesProcessMessageError;
    FrameSupportRealityCallback: FrameSupportRealityCallback;
    FrameSupportRealityContextualAlias: FrameSupportRealityContextualAlias;
    FrameSupportRealityIdentitySocial: FrameSupportRealityIdentitySocial;
    FrameSupportRealityJudgement: FrameSupportRealityJudgement;
    FrameSupportRealityProofOfInkInkSpec: FrameSupportRealityProofOfInkInkSpec;
    FrameSupportRealityStatement: FrameSupportRealityStatement;
    FrameSupportRealityTruth: FrameSupportRealityTruth;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesIdAmount: PalletBalancesIdAmount;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionCandidateInfo: PalletCollatorSelectionCandidateInfo;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletIdentityAuthorityProperties: PalletIdentityAuthorityProperties;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityPersonalIdentity: PalletIdentityPersonalIdentity;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletMessageQueueBookState: PalletMessageQueueBookState;
    PalletMessageQueueCall: PalletMessageQueueCall;
    PalletMessageQueueError: PalletMessageQueueError;
    PalletMessageQueueEvent: PalletMessageQueueEvent;
    PalletMessageQueueNeighbours: PalletMessageQueueNeighbours;
    PalletMessageQueuePage: PalletMessageQueuePage;
    PalletMobRuleCall: PalletMobRuleCall;
    PalletMobRuleCase: PalletMobRuleCase;
    PalletMobRuleCaseDetails: PalletMobRuleCaseDetails;
    PalletMobRuleError: PalletMobRuleError;
    PalletMobRuleEvent: PalletMobRuleEvent;
    PalletMobRuleMobCredit: PalletMobRuleMobCredit;
    PalletMobRuleVoteTally: PalletMobRuleVoteTally;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletPeopleBuilder: PalletPeopleBuilder;
    PalletPeopleCall: PalletPeopleCall;
    PalletPeopleError: PalletPeopleError;
    PalletPeopleEvent: PalletPeopleEvent;
    PalletPeopleExtensionProvideForAliasAccount: PalletPeopleExtensionProvideForAliasAccount;
    PalletPeopleExtensionProvideForPersonalIdentityAccount: PalletPeopleExtensionProvideForPersonalIdentityAccount;
    PalletPeopleOrigin: PalletPeopleOrigin;
    PalletPeoplePersonRecord: PalletPeoplePersonRecord;
    PalletPrivacyVoucherCall: PalletPrivacyVoucherCall;
    PalletPrivacyVoucherError: PalletPrivacyVoucherError;
    PalletPrivacyVoucherEvent: PalletPrivacyVoucherEvent;
    PalletPrivacyVoucherExtensionProvideForVoucherClaimer: PalletPrivacyVoucherExtensionProvideForVoucherClaimer;
    PalletProofOfInkAllocation: PalletProofOfInkAllocation;
    PalletProofOfInkCall: PalletProofOfInkCall;
    PalletProofOfInkCandidate: PalletProofOfInkCandidate;
    PalletProofOfInkConfigRecord: PalletProofOfInkConfigRecord;
    PalletProofOfInkCredibility: PalletProofOfInkCredibility;
    PalletProofOfInkDesignStatus: PalletProofOfInkDesignStatus;
    PalletProofOfInkError: PalletProofOfInkError;
    PalletProofOfInkEvent: PalletProofOfInkEvent;
    PalletProofOfInkExtensionProvideForReferral: PalletProofOfInkExtensionProvideForReferral;
    PalletProofOfInkFamily: PalletProofOfInkFamily;
    PalletProofOfInkFamilyKind: PalletProofOfInkFamilyKind;
    PalletProofOfInkHoldReason: PalletProofOfInkHoldReason;
    PalletProofOfInkInkChoice: PalletProofOfInkInkChoice;
    PalletProofOfInkPerson: PalletProofOfInkPerson;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSkipFeelessPaymentEvent: PalletSkipFeelessPaymentEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PeopleRococoRuntimeOriginCaller: PeopleRococoRuntimeOriginCaller;
    PeopleRococoRuntimePeopleIdentityInfo: PeopleRococoRuntimePeopleIdentityInfo;
    PeopleRococoRuntimeRuntime: PeopleRococoRuntimeRuntime;
    PeopleRococoRuntimeRuntimeHoldReason: PeopleRococoRuntimeRuntimeHoldReason;
    PeopleRococoRuntimeSessionKeys: PeopleRococoRuntimeSessionKeys;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotPrimitivesV6AbridgedHostConfiguration: PolkadotPrimitivesV6AbridgedHostConfiguration;
    PolkadotPrimitivesV6AbridgedHrmpChannel: PolkadotPrimitivesV6AbridgedHrmpChannel;
    PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV6PersistedValidationData: PolkadotPrimitivesV6PersistedValidationData;
    PolkadotPrimitivesV6UpgradeGoAhead: PolkadotPrimitivesV6UpgradeGoAhead;
    PolkadotPrimitivesV6UpgradeRestriction: PolkadotPrimitivesV6UpgradeRestriction;
    PolkadotRuntimeCommonIdentityMigratorPalletCall: PolkadotRuntimeCommonIdentityMigratorPalletCall;
    PolkadotRuntimeCommonIdentityMigratorPalletEvent: PolkadotRuntimeCommonIdentityMigratorPalletEvent;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    StagingXcmV3MultiLocation: StagingXcmV3MultiLocation;
    VerifiableRingVrfImplEncodedPublicKey: VerifiableRingVrfImplEncodedPublicKey;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
